import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Customer",
        required: true, 
    },
    menuItem: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "MenuItem",
        required: true,
    },
    rating: { type: Number, required: true },
    comment: { type: String, required: true, trim: true },
    createdAt: { type: Date, default: Date.now() },
});

const Review = mongoose.model("Review", reviewSchema);

export default Review;
