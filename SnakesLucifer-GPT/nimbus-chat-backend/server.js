// server.js
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import compression from "compression";
import mongoose from "mongoose";
import chatRoutes from "./routes/chat.js";

// -------------------------
// Load environment variables
// -------------------------
dotenv.config();

const app = express();

// -------------------------
// MongoDB Connection
// -------------------------
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`✅ MongoDB connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(`❌ MongoDB connection failed: ${err.message}`);
    process.exit(1);
  }
};

connectDB();

// -------------------------
// Middleware
// -------------------------
app.use(express.json());

// ✅ Disable compression buffering (important for SSE)
app.use(
  compression({
    level: 0,
  })
);

// ✅ CORS setup — allow frontend on localhost:3000
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true,
  })
);

// ✅ Flush helper (ensures SSE flush works)
app.use((req, res, next) => {
  res.flush = res.flush || (() => {});
  next();
});

// -------------------------
// Routes
// -------------------------
app.use("/api/chat", chatRoutes);

// -------------------------
// Root Route
// -------------------------
app.get("/", (req, res) => {
  res.send("🌩️ Nimbus Chat backend is running...");
});

// -------------------------
// Start Server
// -------------------------
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
