import React, { useState } from "react";
import { Input } from "@/components/ui/input"; // Ensure the correct import path for your Input component

const MiniChat = () => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!message.trim()) return;
    console.log("Sending message:", message); // Placeholder for actual message handling
    setMessage(""); // Clear input after sending
  };

  return (
    <div className="fixed bottom-24 right-6 w-80 bg-white border border-gray-300 rounded-xl shadow-xl z-50">
      <div className="bg-orange-500 text-white px-4 py-2 rounded-t-xl font-semibold">
        Chat Support
      </div>
      <div className="p-4 text-sm text-gray-700 max-h-64 overflow-y-auto">
        👋 Hi! How can we help you today?
        <div className="mt-3">
          <Input
            placeholder="Type your message..."
            className="text-sm"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
        </div>
      </div>
    </div>
  );
};

export default MiniChat;
