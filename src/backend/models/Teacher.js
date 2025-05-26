import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    phone: String,
    experience: Number,
    imageUrl: String,
    description: String,
    subject: String,
  },
  { timestamps: true }
);

export default mongoose.model("Teacher", teacherSchema);
