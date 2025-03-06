import mongoose from "mongoose";
import { config } from "./config";

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("Connected to database successfully");
    });
    mongoose.connection.on("error", (err) => {
      console.log("Error in connecting to database", err);
    });

    await mongoose.connect(config.databaseUrl as string); // chnage this "as string" later
  } catch (err) {
    console.log("Failed to connect database: ", err);
    process.exit(1);
  }
};

export default connectDB;
