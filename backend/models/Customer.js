import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
    street: {
    type: String,
        },
    number: {
    type: String,
        },
    floor: {
    type: String,
        },
    door: {
    type: String,
        },
  city: {
    type: String,
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

  address: addressSchema, 

  birthDate: {
    type: Date,
    
  },
});

const Customer = mongoose.model("Customer", customerSchema);

export default Customer;
