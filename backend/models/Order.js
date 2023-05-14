import mongoose from "mongoose";


const orderSchema = new mongoose.Schema({
    client: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Client",
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
        enum: ["pending", "confirmed", "preparing", "delivering", "delivered"],
        default: "pending",
    },
    paymentMethod: {
        type: String,
        enum: ["cash", "card"],
        default: "cash",
    },
    totalPrice: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now() },
});

const Order = mongoose.model("Order", orderSchema);