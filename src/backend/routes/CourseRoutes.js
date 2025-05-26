import express from "express";
import Course from "../models/Course.js";

const router1 = express.Router();

// Create course
router1.post("/", async (req, res) => {
  try {
    const { title, description, classes, imageUrl } = req.body;
    if (!title || !description || !classes || isNaN(classes) || !imageUrl) {
      return res
        .status(400)
        .json({ error: "All fields are required and class must be a number" });
    }
    const newCourse = new Course({ title, description, classes, imageUrl });
    await newCourse.save();
    res.status(201).json(newCourse);
  } catch (err) {
    console.error("Error adding courses:", err); // More specific error logging
    res.status(500).json({ error: "Failed to add Course" });
  }
});

// Get All Products
router1.get("/", async (req, res) => {
  try {
    const course = await Course.find().sort({ createdAt: -1 });
    res.status(200).json(course);
  } catch (err) {
    console.error("Error fetching Course:", err); // More specific error logging
    res.status(500).json({ error: "Failed to fetch Course" });
  }
});

export default router1;
