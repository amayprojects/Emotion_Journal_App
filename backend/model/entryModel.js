import mongoose from "mongoose";

const entrySchema = new mongoose.Schema(
  {
    emotion: { type: String, required: true },
    note: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export default mongoose.model("Entry", entrySchema);
