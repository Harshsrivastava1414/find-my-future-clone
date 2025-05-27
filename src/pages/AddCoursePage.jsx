import { useState } from "react";
import axios from "axios";
import { Navbar } from "../components/Navbar";
import { Footeer } from "../components/Footeer";

const AddCoursePage = () => {
  const [formDataB, setFormDataB] = useState({
    title: "",
    description: "",
    classes: "",
    imageUrl: "",
  });

  const handleChange1 = (e) =>
    setFormDataB({ ...formDataB, [e.target.name]: e.target.value });

  const handleSubmit1 = async (e) => {
    e.preventDefault();
    try {
      await axios.post(" "https://find-my-future-backend.onrender.com/api/courses", formDataB, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      alert("course added!");
    } catch (error) {
      console.error("Error adding course:", error); // Log detailed errors
      alert("Failed to add course.");
    }
  };

  return (
    <>
    <div>
        <Navbar />
      </div>
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">Add Course</h1>
      <form onSubmit={handleSubmit1} className="flex flex-col gap-3">
        <input
          className="p-2 border rounded"
          name="title"
          placeholder="Title"
          onChange={handleChange1}
        />
        <textarea
          className="p-2 border rounded"
          name="description"
          placeholder="Description"
          onChange={handleChange1}
        />
        <input
          className="p-2 border rounded"
          name="classes"
          placeholder="classes"
          type="number"
          onChange={handleChange1}
        />
        <input
          className="p-2 border rounded"
          name="imageUrl"
          placeholder="Image URL"
          onChange={handleChange1}
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

export default AddCoursePage;
