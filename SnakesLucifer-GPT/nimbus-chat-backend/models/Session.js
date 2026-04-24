import mongoose from "mongoose";

const sessionSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  title: String,
  createdAt: { type: Date, default: Date.now, expires: "7d" }, // TTL
});

export default mongoose.model("Session", sessionSchema);
