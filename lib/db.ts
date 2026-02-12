import mongoose from "mongoose";

// 1️⃣ TYPE ANNOTATION: Tell TypeScript this should be a string
const MONGODB_URI: string = process.env.MONGODB_URI || "";

// 2️⃣ Check if URI exists (TypeScript best practice)
if (!MONGODB_URI) {
  throw new Error("Please define MONGODB_URI in .env.local");
}

// 3️⃣ TYPE ANNOTATION: boolean type
let isConnected: boolean = false;

// 4️⃣ RETURN TYPE: Promise<void> means async function that returns nothing
async function connectDB(): Promise<void> {
  if (isConnected) {
    console.log("✅ MongoDB is already connected");
    return;
  }

  try {
    const connect = await mongoose.connect(MONGODB_URI);
    isConnected = connect.connection.readyState === 1;

    console.log(`✅ DB connected: ${connect.connection.host}`);
  } catch (error) {
    console.error("❌ DB connection failed:", error);

    // 5️⃣ TYPE GUARD: Check if error is an Error object
    if (error instanceof Error) {
      throw new Error(`Database connection failed: ${error.message}`);
    }
    throw error;
  }
}

export default connectDB;

// import mongoose from "mongoose";
// const MONGODB_URI = process.env.MONGODB_URI;
// let isConnected = false;
// async function connectDB() {
//   if (isConnected) {
//     console.log("mongodb is already connected");
//     return;
//   }
//   try {
//     const connect = await mongoose.connect(MONGODB_URI);
//     isConnected = connect.connection.readyState === 1;

//     console.log(`DB connected success ${connect.connection.host}`);
//   } catch (error) {
//     console.log("DB connection Failed ");
//     throw error;
//   }
// }

// export default connectDB;
