import mongoose from "mongoose";

export default async function connectDB() {
  try {
    const mongoUri = process.env.MONGODB_URI;
    if (!mongoUri) {
      throw new Error("Mongo_Uri is reuired");
    }

    const conn = await mongoose.connect(mongoUri);
    console.log("mongo db connected ", conn.connection.host);
  } catch (error) {
    console.error("MongoDb connection error :", error.message);
    process.exit(1);
  }
}
