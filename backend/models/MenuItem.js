import mongoose from "mongoose";

const menuItemSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  price: { type: Number, required: true },
  category: {
    type: String,
    required: true,
    trim: true,
    enum: ["Pizza", "Salad", "Pasta", "Desert"],
  },
  image: { type: String, required: true, trim: true },
  description: { type: String, required: true, trim: true },
  extendedDescription: { type: String, required: true, trim: true },
  ingredients: { type: String, required: true, trim: true },
});

const MenuItem = mongoose.model("MenuItem", menuItemSchema);

export default MenuItem;
