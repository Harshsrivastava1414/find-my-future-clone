import React, { useState } from "react";
import axios from "axios";
import { Navbar } from "../components/Navbar";
import {Footeer} from "../components/Footeer";

const BecomeTeacherPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    imageUrl: "",
    description: "",
    subject: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/teachers", form);
      alert("Teacher registered!");
      setForm({
        name: "",
        email: "",
        phone: "",
        experience: "",
        imageUrl: "",
        description: "",
        subject: "",
      });
    } catch (error) {
      console.error(error);
      alert("Failed to register teacher.");
    }
  };

  return (
    <>

      <div>
        <Navbar />
      </div>
      <div className="max-w-xl mx-auto p-6 mt-10 rounded-xl shadow-2xl animate-fadeIn bg-gradient-to-r from-orange-100 via-white to-orange-100 bg-[length:400%_400%] animate-gradient animate-float">
        <h2 className="text-3xl font-bold text-orange-600 text-center mb-6 animate-fadeDown">
          Become a Teacher
        </h2>
        <form
          onSubmit={handleSubmit}
          className="space-y-4 transition-all duration-300"
        >
          {[
            "name",
            "email",
            "phone",
            "experience",
            "subject",
            "imageUrl",
            "description",
          ].map((field) => (
            <input
              key={field}
              name={field}
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              value={form[field]}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-300"
            />
          ))}
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105 duration-300"
          >
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

export default BecomeTeacherPage;
