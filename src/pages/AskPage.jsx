// // src/pages/AskPage.jsx

import React, { useState } from "react";
// import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navbar } from "../components/Navbar";
import { Footeer } from "../components/Footeer";
// import { Navbar } from "../components/Navbar";

export default function AskPage() {
  const [question, setQuestion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Question submitted:", question);
    // Later we will connect this to backend API
    setQuestion("");
  };

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="min-h-screen bg-orange-50 flex items-center justify-center p-6">
        <Card className="w-full max-w-2xl rounded-2xl shadow-lg">
          <CardContent className="p-8">
            <h1 className="text-3xl font-bold text-orange-600 text-center mb-6">
              Ask a Doubt
            </h1>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Your Question
                </label>
                <Textarea
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  placeholder="Type your doubt here..."
                  className="h-32 rounded-xl"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-full py-3 text-lg"
              >
                Submit
              </Button>
            </form>

            <p className="text-center text-sm text-gray-500 mt-6">
              Need help urgently?{" "}
              <a href="/call" className="text-orange-500 font-semibold">
                Request a Call
              </a>
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


// // pages/AskPage.jsx
// const AskPage = () => {
//   return <div>Ask Page Works!</div>;
// };

// export default AskPage;
