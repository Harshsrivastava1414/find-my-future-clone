import express from "express";
import Product from "../models/Centers.js";

const router = express.Router();

// Create Product
router.post("/", async (req, res) => {
  try {
    const { title, description, price, imageUrl } = req.body;
    if (!title || !description || !price || isNaN(price) || !imageUrl) {
      return res
        .status(400)
        .json({ error: "All fields are required and price must be a number" });
    }
    const newProduct = new Product({ title, description, price, imageUrl });
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (err) {
    console.error("Error adding product:", err); // More specific error logging
    res.status(500).json({ error: "Failed to add product" });
  }
});

// Get All Products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.status(200).json(products);
  } catch (err) {
    console.error("Error fetching products:", err); // More specific error logging
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

export default router;
