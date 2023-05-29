import { Customer, MenuItem, Order } from "../models/index.js";
import { generateToken } from "../lib/jwt.js";
import bcrypt from "bcrypt";
import mongoose from "mongoose";

const resolvers = {
  Query: {
    getCustomerData: async (_, {}, ctx) => {
      try {
        const userId = ctx.user?.id;
    
        if (!userId) {
          throw new Error("User not found");
        }
    
        const customer = await Customer.findById(userId).select("-password");
    
        if (!customer) {
          throw new Error("Customer not found");
        }
    
        return customer;
      } catch (error) {
        throw new Error(error);
      }
    },
    getMenuItems: async () => {
      try {
        const menuItems = await MenuItem.find({});
        return {
          success: true,
          menuItems,
          code: 200,
          message: "Menu items retrieved successfully",
        };
      } catch (error) {
        return {
          success: false,
          code: error.extensions.response.status,
          message: error.extensions.response.body,
          menuItems: null,
        };
      }
    },
  },
  Mutation: {
    createUser: async (_, { input }) => {
      const { email, password } = input;

      const userExists = await Customer.findOne({ email });

      if (userExists) {
        throw new Error("User already exists");
      }

      // Hash password
      const salt = await bcrypt.genSalt(10);
      input.password = await bcrypt.hash(password, salt);

      try {
        const newCustomer = new Customer(input);
        newCustomer.save();
        const token = generateToken(newCustomer, process.env.SECRET, "24h");
        return {
          success: true,
          user: newCustomer,
          code: 200,
          message: "User created successfully",
          token: {
            token,
          },
        };
      } catch (error) {
        return {
          success: false,
          code: error.extensions.response.status,
          message: error.extensions.response.body,
          user: null,
          token: null,
        };
      }
    },
    authUser: async (_, { input }) => {
      const { email, password } = input;

      // If user exists
      const foundUser = await Customer.findOne({ email }).exec();
      if (!foundUser) {
        throw new Error("Access denied");
      }
      // Check password
      const passwordCorrect = await bcrypt.compare(
        password,
        foundUser.password
      );
      if (!passwordCorrect) {
        throw new Error("Access denied");
      }
      // Create token
      return {
        token: generateToken(foundUser, process.env.SECRET, "24h"),
      };
    },

    saveDeliveryAddress: async (_, { input }, ctx) => {
      const { address, city, zipCode } = input;
      const userId = ctx.user?.id;

      if (!userId) {
        throw new Error("User not found");
      }

      try {
        const updatedCustomer = await Customer.findByIdAndUpdate(
          userId,
          { savedDeliveryAddress: { address, city, zipCode } },
          { new: true }
        );

        if (!updatedCustomer) {
          throw new Error("Customer not found");
        }

        return "Delivery address saved successfully";
      } catch (error) {
        throw new Error(error);
      }
    },

    createOrder: async (_, { input }, ctx) => {
      //Destructure input
      const { items, deliveryAddress, totalPrice } = input;

      // Get customer
      const customer = ctx.user?.id;

      // Verify customer
      if (!customer) {
        throw new Error("Access denied");
      }
      const foundCustomer = await Customer.findById(customer);
      if (!foundCustomer) {
        throw new Error("Invalid customer");
      }

      // Verify items
      const ObjectId = mongoose.Types.ObjectId;

      const menuItemsIds = items.map((item) => item.menuItem);

      const menuItems = await MenuItem.find({
        _id: { $in: menuItemsIds.map((item) => new ObjectId(item)) },
      });

      if (menuItems.length !== items.length) {
        throw new Error("Invalid menu items");
      }

      // Verify total price
      const calculatedTotalOrder = items.reduce(
        (count, item) => count + item.price * item.quantity,
        0
      );

      const delivery = calculatedTotalOrder > 30 ? 0 : 3.5;
      const calculatedTotalPrice = calculatedTotalOrder + delivery;

      if (calculatedTotalPrice !== totalPrice) {
        throw new Error("Invalid total price");
      }

      // Create order
      try {
        await new Order({
          customer,
          items,
          deliveryAddress,
          totalPrice,
        }).save();
        
        return "Order created successfully";
      } catch (error) {
        throw new Error(error);
      }
    },
  },
};

export default resolvers;
