import MenuItem from "../models/MenuItem.js";

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
};

export default resolvers;
