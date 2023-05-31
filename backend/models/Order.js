import mongoose from "mongoose";
import { addressSchema } from "./address.js";

const orderSchema = new mongoose.Schema({
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Customer",
    required: true,
  },
  items: [
    {
      menuItem: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "MenuItem",
        required: true,
      },
      quantity: { type: Number, required: true },
    },
  ],
  status: {
    type: String,
    enum: ["pending", "delivered"],
    default: "pending",
  },
  deliveryDetails: {
    receiver: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    zipCode: { type: String, required: true },
    phone: { type: String, required: true },
  },
  totalPrice: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now() },
});

const Order = mongoose.model("Order", orderSchema);

export default Order;
