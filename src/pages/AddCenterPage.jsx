import { useState } from "react";
import axios from "axios";
import { Navbar } from "../components/Navbar";
import { Footeer } from "../components/Footeer";

const AddProductPage = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    imageUrl: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://find-my-future-backend.onrender.com/api/products",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      alert("Product added!");
    } catch (error) {
      console.error("Error adding center:", error);
      alert("Failed to add center.");
    }
  };

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="p-4 max-w-md mx-auto">
        <h1 className="text-xl font-bold mb-4">Add Coaching Center</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            className="p-2 border rounded"
            name="title"
            placeholder="Title"
            onChange={handleChange}
          />
          <textarea
            className="p-2 border rounded"
            name="description"
            placeholder="Description"
            onChange={handleChange}
          />
          <input
            className="p-2 border rounded"
            name="price"
            placeholder="Fees"
            type="number"
            onChange={handleChange}
          />
          <input
            className="p-2 border rounded"
            name="imageUrl"
            placeholder="Image URL"
            onChange={handleChange}
          />
          <button className="bg-blue-600 text-white py-2 rounded" type="submit">
            Submit
          </button>
        </form>
      </div>
      <div>
        <Footeer />
      </div>
    </>
  );
};

export default AddProductPage;
