import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  session: { type: mongoose.Schema.Types.ObjectId, ref: "Session" },
  sender: { type: String, enum: ["user", "assistant"], required: true },
  text: String,
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Message", messageSchema);
