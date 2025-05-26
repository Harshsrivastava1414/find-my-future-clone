// src/pages/CallPage.jsx

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navbar } from "../components/Navbar";
import { Footeer } from "../components/Footeer";

export default function CallPage() {
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Call request submitted for:", phone);
    setPhone("");
  };

  return (
    <>
     <div>
            <Navbar />
          </div>
    <div className="min-h-screen bg-orange-50 flex items-center justify-center p-6">
      <Card className="w-full max-w-md rounded-2xl shadow-lg">
        <CardContent className="p-8">
          <h1 className="text-3xl font-bold text-orange-600 text-center mb-6">
            Request a Call
          </h1>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Phone Number
              </label>
              <Input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter your phone number"
                className="rounded-xl"
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-full py-3 text-lg"
            >
              Request Call
            </Button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-6">
            We'll call you back within{" "}
            <span className="text-orange-500 font-semibold">5 minutes</span>!
          </p>
        </CardContent>
      </Card>
    </div>
     <div>
            <Footeer />
          </div>
    </>
  );
}
