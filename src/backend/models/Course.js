import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  classes: { type: Number, required: true },
  imageUrl: { type: String, required: true },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("course", courseSchema);