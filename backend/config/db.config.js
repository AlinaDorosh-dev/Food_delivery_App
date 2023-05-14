import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()

const DB_URL = process.env.DB_URL;

const connectDB = async () => {
  try {
    await mongoose.connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.log(error);
    process.exit(1); // Stop the app if there is an error connecting to the database
  }
};

export default connectDB;
