 {/* Navbar */}

 import React, { useState} from "react";
 import { useNavigate } from "react-router-dom";
 import { Menu, X } from "lucide-react";
 import { Button } from "@/components/ui/button";



 export function Navbar() {
   const [menuOpen, setMenuOpen] = useState(false);
   const navigate = useNavigate();

    return (
      <header className="bg-white shadow-md p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div
            className="text-2xl font-bold text-orange-600 cursor-pointer"
            onClick={() => navigate("/")}
          >
            FMT
          </div>
          <nav className="hidden md:flex space-x-4 items-center">
            <Button
              variant="outline"
              className="text-orange-500 border-orange-500 rounded-full"
              onClick={() => navigate("/courses")}
            >
              1:1 CLASSES
            </Button>
            <Button variant="ghost" onClick={() => navigate("/centers")}>
              Centers
            </Button>
            <Button variant="ghost" onClick={() => navigate("/teacherList")}>
              Teachers
            </Button>
            <Button variant="ghost" onClick={() => navigate("/teacher")}>
              Become a Teacher
            </Button>
            <Button variant="ghost" onClick={() => navigate("/courses")}>
              Courses
            </Button>
            <Button
              className="bg-orange-500 hover:bg-orange-600 text-white rounded-full"
              onClick={() => navigate("/login")}
            >
              LOGIN
            </Button>
          </nav>
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-2 space-y-2">
            <Button
              variant="outline"
              className="w-full"
              onClick={() => navigate("/classes")}
            >
              1:1 CLASSES
            </Button>
            <Button
              variant="ghost"
              className="w-full text-left"
              onClick={() => navigate("/centers")}
            >
              Centers
            </Button>
            <Button
              variant="ghost"
              className="w-full text-left"
              onClick={() => navigate("/teacherList")}
            >
              Teachers
            </Button>
            <Button
              variant="ghost"
              className="w-full text-left"
              onClick={() => navigate("/teacher")}
            >
              Become a Teacher
            </Button>
            <Button
              variant="ghost"
              className="w-full text-left"
              onClick={() => navigate("/courses")}
            >
              Courses
            </Button>
            <Button
              className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-full"
              onClick={() => navigate("/login")}
            >
              LOGIN
            </Button>
          </div>
        )}
      </header>
    );}