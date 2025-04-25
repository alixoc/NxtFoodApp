import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";


dotenv.config();

const Port = process.env.PORT || 4000;
const app = express();

// Apply middleware BEFORE routes

app.use(express.json()); // Optional but useful if you're posting JSON later

// Import and use your routes
import chefRoute from "./route/chef.route.js";
app.use("/chef", chefRoute);

// MongoDB connection
const URI = process.env.MongoDBURI;

async function connectDB() {
  try {
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to DB successfully");
  } catch (err) {
    console.error("Error connecting to DB:", err.message);
    process.exit(1);
  }
}

connectDB();

app.listen(Port, () => {
  console.log(`Server is listening on port ${Port}`);
});
