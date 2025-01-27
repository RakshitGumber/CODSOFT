import { connect } from "mongoose";

const connectDB = async () => {
  try {
    if (process.env.MONGO_URL === undefined)
      throw new Error("Missing MONGO_URL environment variable");

    connect(process.env.MONGO_URL);
  } catch (error: Error | any) {
    console.log(error.message ?? error);
    process.exit(1);
  }
};

export default connectDB;
