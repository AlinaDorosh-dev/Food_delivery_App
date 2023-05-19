import MenuItem from "../models/MenuItem.js";
import Customer from "../models/Customer.js";
import { generateToken } from "../lib/jwt.js";
import bcrypt from "bcrypt";

const resolvers = {
  Query: {
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
  },
};

export default resolvers;
