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
            className="bg-gray-900 rounded-xl shadow-md overflow-hidden"
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
    title: "Deer",
    description: "Explore the animal gaint",
    category: "Animals",
    image:
      "https://images.unsplash.com/photo-1542997830-49fc838e4c61?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
  },
  {
    id: 2,
    title: "Elephant",
    description: "Explore wild animals",
    category: "Animals",
    image:
      "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWxlcGhhbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
  },
  {
    id: 3,
    title: "Tiger",
    description: "Explore wild animals",
    category: "Animals",
    image:
      "https://images.unsplash.com/photo-1500463959177-e0869687df26?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dGlnZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
  },
];

export default ModelList;
