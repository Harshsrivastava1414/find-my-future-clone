import React from "react";
import { motion } from "framer-motion";
const blogs = [
  {
    title:
      "Transforming Education: The Complete Guide to Home Tuition in Noida.",
    subtitle: "HOME TUITION IN NOIDA",
    imageAlt: "THE COMPLETE GUIDE!!",
    date: "2025-04-29",
    author: "FMT",
    imageUrl: "/public/1745475471_Tuition_in_Noida.webp", // Updated path
  },
  {
    title:
      "The Ultimate Guide to Online Home Tuition in Noida: Benefits, Features and Selection Tips.",
    subtitle: "ONLINE HOME TUITION IN NOIDA",
    imageAlt: "THE ULTIMATE GUIDE",
    date: "2025-04-28",
    author: "FMT",
    imageUrl: "/images/1745837785_website.webp", // Updated path
  },
  {
    title:
      "Choosing Between Tuition Centres and Home Tuition in Noida: A Complete Guide",
    subtitle: "PERSONALIZED LEARNING",
    imageAlt: "AT YOUR DOORSTEP",
    date: "2025-04-24",
    author: "FMT",
    imageUrl: "/images/1745475471_Tuition_in_Noida.webp", // Updated path
  },
];
// No need for import tutionImage from "../utils/..." anymore

export function BlogSection() {
  return (
    <section className="bg-orange-50 py-12 px-4 sm:px-6 lg:px-12">
      <h2 className="text-3xl font-bold text-center text-orange-600 mb-10">
        Our Latest Blogs
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
          >
            <div className="w-full h-44 overflow-hidden">
              <img
                src={blog.imageUrl}
                alt={blog.imageAlt}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>

            <div className="p-4">
              <h4 className="text-sm text-orange-500 font-semibold mb-1 uppercase tracking-wide">
                {blog.subtitle}
              </h4>
              <h3 className="text-lg font-bold text-gray-800 mb-2 leading-snug">
                {blog.title}
              </h3>
              <div className="text-xs text-gray-500 flex justify-between mt-2">
                <span>{blog.author}</span>
                <span>{blog.date}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-md transition"
        >
          VIEW MORE
        </motion.button>
      </div>
    </section>
  );
}
