// src/pages/LoginPage.jsx

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import axios from "axios";

export default function LoginPage() {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/login", {
        phoneNumber,
      });
      alert("Login successful!"); // Here you can handle redirect or token storage
      console.log("Response:", response.data);
    } catch (error) {
      alert("Login failed, please check your phone number and try again.");
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-200 to-orange-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md rounded-2xl shadow-lg">
        <CardContent className="p-8">
          <h1 className="text-3xl font-bold text-orange-600 text-center mb-6">
            Login
          </h1>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="text-gray-700 font-medium">Phone Number</label>
              <Input
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Enter phone number"
                className="mt-2"
                required
              />
            </div>

            <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-full py-3 text-lg">
              Send OTP
            </Button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-6">
            New User?{" "}
            <a href="/register" className="text-orange-500 font-semibold">
              Register Here
            </a>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
