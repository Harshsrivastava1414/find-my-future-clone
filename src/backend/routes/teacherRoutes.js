import express from "express";
import Teacher from "../models/Teacher.js";

const router = express.Router();

// Register teacher
router.post("/", async (req, res) => {
  try {
    const newTeacher = new Teacher(req.body);
    await newTeacher.save();
    res.status(201).json(newTeacher);
  } catch (err) {
    res.status(500).json({ error: "Failed to add teacher." });
  }
});

// Get all teachers
router.get("/", async (req, res) => {
  try {
    const teachers = await Teacher.find().sort({ createdAt: -1 });
    res.status(200).json(teachers);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch teachers." });
  }
});

export default router;
