import React, { useEffect, useState } from "react";
import axios from "axios";
import { Footeer } from "../components/Footeer";
import { Navbar } from "../components/Navbar";
import { motion } from "framer-motion";

const TeachersPage = () => {
  const [teachers, setTeachers] = useState([]);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("name");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/teachers")
      .then((res) => setTeachers(res.data))
      .catch((err) => console.error(err));
  }, []);

  const filteredTeachers = teachers
    .filter((t) =>
      `${t.name} ${t.subject} ${t.description}`
        .toLowerCase()
        .includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name);
      if (sortBy === "experience") return b.experience - a.experience;
      if (sortBy === "subject") return a.subject.localeCompare(b.subject);
      return 0;
    });

  return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto p-6">
        <h2 className="text-3xl font-bold text-center mb-8 text-orange-500">
          Meet Our Teachers
        </h2>

        {/* Search & Sort Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <input
            type="text"
            placeholder="Search by name, subject, or bio..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full sm:w-1/2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400"
          >
            <option value="name">Sort by Name</option>
            <option value="experience">Sort by Experience</option>
            <option value="subject">Sort by Subject</option>
          </select>
        </div>

        {/* Teacher Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTeachers.map((t, index) => (
            <motion.div
              key={t._id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="border-2 border-orange-400 rounded-xl p-4 shadow-xl bg-white hover:shadow-2xl hover:scale-[1.02] transition-all"
            >
              <div className="w-full h-48 overflow-hidden rounded-lg mb-4">
                <img
                  src={t.imageUrl}
                  alt={t.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-xl font-bold text-center mb-2">{t.name}</h3>
              <p className="text-center text-orange-600 font-semibold text-lg mb-1">
                {t.subject || "Subject not specified"}
              </p>

              <p className="text-center text-sm text-gray-600 mb-1">
                Experience: {t.experience} years
              </p>

              <p className="text-center text-sm text-gray-700 mb-3 px-2">
                {t.description}
              </p>

              <div className="text-center text-sm text-gray-500 mb-4">
                Contact: {t.email}
              </div>

              <div className="flex justify-around">
                <button className="border border-orange-500 text-orange-500 px-4 py-2 rounded-full hover:bg-orange-100 transition">
                  Explore
                </button>
                <button className="bg-orange-400 text-white px-4 py-2 rounded-full hover:bg-orange-500 transition">
                  Join Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Footeer />
    </>
  );
};

export default TeachersPage;
