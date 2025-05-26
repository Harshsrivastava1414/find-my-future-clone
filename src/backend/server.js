import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import courseRoutes from "./routes/CourseRoutes.js"; // ✅ Adjust path as needed
import teacherRoutes from "./routes/teacherRoutes.js";
import centerRoutes from "./routes/CenterRoutes.js";
dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1);
  });

// User schema and model
const userSchema = new mongoose.Schema({
  fullName: String,
  phoneNumber: { type: String, unique: true },
  email: String,
  class: String,
  city: String,
  password: String,
});
const User = mongoose.model("User", userSchema);

// Registration
app.post("/api/register", async (req, res) => {
  const { fullName, phoneNumber, email, class: userClass, city } = req.body;
  const existingUser = await User.findOne({ phoneNumber });
  if (existingUser)
    return res.status(400).json({ error: "User already exists" });

  const hashedPassword = await bcrypt.hash(phoneNumber, 10);

  const newUser = new User({
    fullName,
    phoneNumber,
    email,
    class: userClass,
    city,
    password: hashedPassword,
  });

  await newUser.save();
  res.status(201).json({ message: "User registered successfully!" });
});

// Login
app.post("/api/login", async (req, res) => {
  const { phoneNumber } = req.body;

  const user = await User.findOne({ phoneNumber });
  if (!user) return res.status(400).json({ error: "User not found" });

  const isPasswordValid = await bcrypt.compare(phoneNumber, user.password);
  if (!isPasswordValid)
    return res.status(401).json({ error: "Invalid credentials" });

  const token = jwt.sign(
    { phoneNumber: user.phoneNumber },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );
  res.status(200).json({ message: "Login successful", token });
});

// ✅ Mount routes
app.use("/api/courses", courseRoutes);
app.use("/api/teachers", teacherRoutes);
app.use("/api/products", centerRoutes );
// Global error handler
app.use((err, req, res, next) => {
  console.error("Unhandled error:", err);
  res.status(err.status || 500).json({
    error: err.message || "Something went wrong!",
  });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
