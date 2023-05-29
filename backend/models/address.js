import mongoose from "mongoose";

 export const addressSchema = new mongoose.Schema({
    address: {
      type: String,
    },
    city: {
      type: String,
      default: "Málaga",
    },
    zipCode: {
      type: Number,
      minlength: 5,
      maxlength: 5,
    },
    country: {
      type: String,
      default: "Spain",
    },
  });