import { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardContent } from "@/components/ui/card";
import { Footeer } from "../components/Footeer";
import { Navbar } from "../components/Navbar";
import { motion } from "framer-motion";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [sortOption, setSortOption] = useState("nameAsc");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then((res) => setProducts(res.data));
  }, []);

  const filteredProducts = products
    .filter((product) =>
      `${product.title} ${product.description}`
        .toLowerCase()
        .includes(search.toLowerCase())
    )
    .sort((a, b) => {
      switch (sortOption) {
        case "nameAsc":
          return a.title.localeCompare(b.title);
        case "nameDesc":
          return b.title.localeCompare(a.title);
        case "priceAsc":
          return a.price - b.price;
        case "priceDesc":
          return b.price - a.price;
        default:
          return 0;
      }
    });

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-orange-50 py-12 px-6">
        <h1 className="text-4xl font-bold text-center text-orange-600 mb-10">
          Coaching Centers
        </h1>

        {/* Search + Sort Controls */}
        <div className="max-w-5xl mx-auto mb-8 flex flex-col sm:flex-row gap-4 justify-between items-center">
          <input
            type="text"
            placeholder="Search centers..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full sm:w-2/3 px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
          />
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
          >
            <option value="nameAsc">Name: A → Z</option>
            <option value="nameDesc">Name: Z → A</option>
            <option value="priceAsc">Price: Low → High</option>
            <option value="priceDesc">Price: High → Low</option>
          </select>
        </div>

        {/* Products Grid */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product._id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, type: "spring" }}
            >
              <Card className="hover:scale-105 transition-transform cursor-pointer bg-white shadow-xl rounded-xl overflow-hidden">
                <CardContent className="p-4">
                  <img
                    src={product.imageUrl}
                    alt={product.title}
                    className="h-40 w-full object-cover rounded-lg mb-3"
                  />
                  <h2 className="text-xl font-semibold text-orange-700 mb-1">
                    {product.title}
                  </h2>
                  <p className="text-gray-600 text-sm mb-1">
                    {product.description}
                  </p>
                  <p className="text-green-600 font-bold text-sm">
                    ₹{product.price}
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

export default ProductsPage;
