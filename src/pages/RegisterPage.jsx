// src/pages/RegisterPage.jsx

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import axios from "axios";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    class: "",
    city: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/register", formData);
      alert("Registration successful! Please log in.");
    } catch (error) {
      alert("Registration failed, please try again.");
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-orange-50 flex items-center justify-center py-12 px-4">
      <Card className="w-full max-w-md shadow-lg rounded-xl">
        <CardContent className="p-8">
          <h1 className="text-3xl font-bold text-orange-600 text-center mb-6">
            Student Registration
          </h1>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="text-gray-700 font-medium">Full Name</label>
              <Input
                name="fullName"
                placeholder="Enter your name"
                className="mt-2"
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="text-gray-700 font-medium">Phone Number</label>
              <Input
                name="phoneNumber"
                placeholder="Enter phone number"
                className="mt-2"
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="text-gray-700 font-medium">
                Email (Optional)
              </label>
              <Input
                name="email"
                placeholder="Enter your email"
                className="mt-2"
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="text-gray-700 font-medium">Class</label>
              <Input
                name="class"
                placeholder="Eg: 10th, 12th, BSc"
                className="mt-2"
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="text-gray-700 font-medium">City</label>
              <Input
                name="city"
                placeholder="City Name"
                className="mt-2"
                onChange={handleChange}
              />
            </div>

            <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-full py-3 text-lg">
              Register Now
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
