import React from "react";
import { useNavigate } from "react-router-dom";

export function Footeer() {
     const navigate = useNavigate();

     return(
  <footer className="bg-white text-gray-700 pt-10 border-t">
    <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 pb-10">
      <div>
        <h3 className="text-orange-600 font-bold text-lg mb-2">FMT</h3>
        <p className="text-sm">Empowering minds, one doubt at a time.</p>
      </div>
      <div>
        <h4 className="font-semibold text-sm mb-2">Quick Links</h4>
        <ul className="space-y-1 text-sm">
          <li>
            <button onClick={() => navigate("/classes")}>1:1 Classes</button>
          </li>
          <li>
            <button onClick={() => navigate("/courses")}>Courses</button>
          </li>
          <li>
            <button onClick={() => navigate("/teacher")}>
              Become a Teacher
            </button>
          </li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold text-sm mb-2">Resources</h4>
        <ul className="space-y-1 text-sm">
          <li>
            <button onClick={() => navigate("/centers")}>Centers</button>
          </li>
          <li>
            <button onClick={() => navigate("/chat")}>Chat Support</button>
          </li>
          <li>
            <button onClick={() => navigate("/call")}>Call Support</button>
          </li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold text-sm mb-2">Contact Us</h4>
        <p className="text-sm">Email: harsh200214@gmail.com</p>
        <p className="text-sm">Phone: +91-7007102060</p>
      </div>
    </div>
    <div className="bg-orange-500 text-white text-center py-3 text-sm">
      © {new Date().getFullYear()} FMT. All rights reserved.
    </div>
  </footer>
     );
}
