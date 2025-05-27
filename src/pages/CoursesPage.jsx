import { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardContent } from "@/components/ui/card";
import { Footeer } from "../components/Footeer";
import { Navbar } from "../components/Navbar";
import { motion } from "framer-motion";


const CoursesPage = () => {
  const [courses, setCourses] = useState([]);
  const [search, setSearch] = useState("");
  const [sortAsc, setSortAsc] = useState(true);

  useEffect(() => {
    axios
      .get(""https://find-my-future-backend.onrender.com/api/courses")
      .then((res) => setCourses(res.data));
  }, []);

  const filteredCourses = courses
    .filter((course) =>
      `${course.title} ${course.class}`
        .toLowerCase()
        .includes(search.toLowerCase())
    )
    .sort((a, b) =>
      sortAsc ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title)
    );

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-orange-50 py-12 px-6">
        <h1 className="text-4xl font-bold text-center text-orange-600 mb-10">
          Courses
        </h1>

        {/* Search and Sort */}
        <div className="max-w-4xl mx-auto mb-8 flex flex-col sm:flex-row items-center gap-4">
          <input
            type="text"
            placeholder="Search courses..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full sm:flex-1 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
          />
          <button
            onClick={() => setSortAsc(!sortAsc)}
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-md transition hover:shadow-lg"
          >
            Sort: {sortAsc ? "A → Z" : "Z → A"}
          </button>
        </div>

        {/* Course Cards */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {filteredCourses.map((course, index) => (
            <motion.div
              key={course._id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, type: "spring" }}
            >
              <Card className="hover:scale-105 transition-transform cursor-pointer bg-white shadow-xl rounded-xl overflow-hidden">
                <CardContent className="p-4">
                  <img
                    src={course.imageUrl}
                    alt={course.title}
                    className="h-40 w-full object-cover rounded-lg mb-3"
                  />
                  <h2 className="text-xl font-semibold text-orange-700 mb-1">
                    {course.title}
                  </h2>
                  <p className="text-gray-600 text-sm mb-1">
                    {course.description}
                  </p>
                  <p className="text-green-600 font-bold text-sm">
                    Class: {course.class || "N/A"}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <Footeer />
    </>
  );
};

export default CoursesPage;
