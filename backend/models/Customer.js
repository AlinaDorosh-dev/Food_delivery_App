import mongoose from "mongoose";
import { addressSchema } from "./address.js";


const customerSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },

  lastName: { type: String, required: true, trim: true },

  email: { type: String, required: true, trim: true, unique: true },

  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 60,
    maxlength: 60,
  },

  phone: {
    type: Number,
    unique: true,
    index: true,
    sparse: true,
    minlength: 9,
    maxlength: 9,
    trim: true,
  },

  createdAt: { type: Date, default: Date.now() },

  savedDeliveryAddress: addressSchema,

  
});

const Customer = mongoose.model("Customer", customerSchema);

export default Customer;
