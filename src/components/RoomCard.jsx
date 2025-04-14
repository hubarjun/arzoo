import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function RoomCard({
  id,
  title,
  description,
  image,
  icon: Icon,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="overflow-hidden bg-neutral-900 border-neutral-800">
        <div className="relative aspect-video">
          <img src={image} alt={title} className="object-cover w-full h-full" />
          <div className="absolute top-4 right-4 bg-black/80 text-gray-400 px-3 py-1 rounded-full text-sm flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500   rounded-full animate-pulse" />
            VR Ready
          </div>
        </div>
        <div className="p-6">
          <div className="flex items-center gap-3 mb-3">
            <Icon className="w-6 text-gray-300 h-6" />
            <h3 className="text-xl text-gray-300 font-space">{title}</h3>
          </div>
          <p className="text-gray-400 mb-4">{description}</p>
          <Button
            variant="outline"
            className="w-full border-white/20 text-gray-300 hover:bg-white hover:text-black transition-all"
            asChild
          >
            <Link to={`/room/${id}`}>Enter AR/VR Experience</Link>
          </Button>
        </div>
      </Card>
    </motion.div>
  );
}
