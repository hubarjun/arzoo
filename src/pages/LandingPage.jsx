import { motion } from "framer-motion";
import { Building2, Home, ChefHat, Bed } from "lucide-react";
import { Button } from "@/components/ui/button";
import LiquidChrome from "../components/ui/LiquidChrome";
import { Link } from "react-router-dom";
import { RoomList } from "../components/RoomList";
import ShinyText from "../components/ui/ShinyText";
import BlurText from "../components/ui/BlurText";
import Plasma from "../components/ui/Plasma";
import ModelList from "./ModelList";
import zooVideo from "../../public/video/AR_Animals_Magical_Mobile_Experience.mp4";
const handleAnimationComplete = () => {
  // console.log("");
};
const features = [
  {
    icon: Building2,
    title: "Visualize Your Space",
    description: "See exactly how your future home will look and feel",
  },

  {
    icon: Building2,
    title: "Save Time & Money",
    description: "Prevent costly modifications during construction",
  },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={zooVideo}
          autoPlay
          muted
          loop
          playsInline
        />

        {/* Top black linear gradient overlay to improve readability */}
        <div className="pointer-events-none absolute inset-0 bg-black bg-opacity-60" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center z-10"
        >
          <h1 className="font-serif text-6xl md:text-8xl justify-center  bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-slate-500 via-green-400 to-gray-700 bg-clip-text text-transparentss  bg-clip-text text-transparent">
            Experience your Zoo
            <br />
            <span className="text-6xl md:text-8xl font-playfair ">
              via VR/AR
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 my-8 font-space">
            <ShinyText
              text="Virtual reality turning your experience"
              disabled={false}
              speed={3}
            />
          </p>
          <Button
            size="lg"
            className="font-bold border border-white/10 bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20 backdrop-saturate-100 backdrop-contrast-100 rounded-full"
            asChild
          >
            <Link to="/models">
              <ShinyText
                text="Explore AR/VR"
                disabled={false}
                speed={3}
                className=""
              />
            </Link>
          </Button>
        </motion.div>
      </section>

      <section className="py-20 px-6 bg-neutral-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-playfair mb-12 text-center">
            Why Choose Virtual Tours?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="text-center p-6"
              >
                <feature.icon className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-space mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ModelList />
    </div>
  );
}
