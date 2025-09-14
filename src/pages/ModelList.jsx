import React from "react";
import { motion } from "framer-motion";
import { Eye as Eye3d, Download } from "lucide-react";
import { Link } from "react-router-dom";

const ModelList = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          3D Learning Models
        </h2>
        <p className="text-gray-600">
          Explore our collection of interactive 3D models
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {models.map((model, index) => (
          <motion.div
            key={model.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-xl shadow-md overflow-hidden"
          >
            <img
              src={model.image}
              alt={model.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{model.title}</h3>
              <p className="text-gray-600 mb-4">{model.description}</p>
              <div className="flex justify-between items-center">
                <Link
                  to={`/ar/${model.id}`}
                  className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                >
                  <Eye3d className="mr-2 h-5 w-5" />
                  View in AR
                </Link>
                <span className="text-gray-500 text-sm">{model.category}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const models = [
  {
    id: 1,
    title: "Human Anatomy",
    description: "Explore the human body systems in 3D",
    category: "Biology",
    image:
      "https://images.unsplash.com/photo-1530210124550-912dc1381cb8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Solar System",
    description: "Interactive model of our solar system",
    category: "Astronomy",
    image:
      "https://plus.unsplash.com/premium_photo-1717620945061-fdb31301a205?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c29sYXIlMjBzeXN0ZW18ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 3,
    title: "Mechanical Engine",
    description: "Detailed 3D model of a combustion engine",
    category: "Engineering",
    image:
      "https://images.unsplash.com/photo-1600377232142-164c095e686e?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default ModelList;
