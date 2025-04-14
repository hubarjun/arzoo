import { motion } from "framer-motion";
import { Building2, Home, ChefHat, Bed } from "lucide-react";
import { Button } from "@/components/ui/button";
import LiquidChrome from "../components/ui/LiquidChrome";
import { Link } from "react-router-dom";
import { RoomList } from "../components/RoomList";
import ShinyText from "../components/ui/ShinyText";
import BlurText from "../components/ui/BlurText";
const handleAnimationComplete = () => {
  console.log("");
};
const features = [
  {
    icon: Building2,
    title: "Visualize Your Space",
    description: "See exactly how your future home will look and feel",
  },
  {
    icon: Home,
    title: "Make Informed Decisions",
    description: "Adjust designs before construction begins",
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center z-10"
        >
          <h1 className="">
            <BlurText
              text="Experience Your Home"
              delay={150}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              className="text-6xl md:text-8xl font-playfair"
            />
            <br />
            <span className="text-6xl md:text-8xl font-playfair ">
              Before It's Builts
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 my-8 font-space">
            <ShinyText
              text="Virtual reality tours of your future living spaces"
              disabled={false}
              speed={3}
              className=" hover:text-black"
            />
          </p>
          <Button
            size="lg"
            className="bg-grey-200 border border-white  rounded-3xl hover:text-black hover:bg-gray-200 transition-all"
            asChild
          >
            <Link to="/rooms">
              <ShinyText
                text="Explore Rooms"
                disabled={false}
                speed={3}
                className=" hover:text-black"
              />
            </Link>
          </Button>
        </motion.div>

        <div className="absolute w-full h-full ">
          <LiquidChrome
            effectOptions={{
              onSpeedUp: () => {},
              onSlowDown: () => {},
              distortion: "turbulentDistortion",
              length: 400,
              roadWidth: 10,
              islandWidth: 2,
              lanesPerRoad: 4,
              fov: 90,
              fovSpeedUp: 150,
              speedUp: 2,
              carLightsFade: 0.4,
              totalSideLightSticks: 20,
              lightPairsPerRoadWay: 40,
              shoulderLinesWidthPercentage: 0.05,
              brokenLinesWidthPercentage: 0.1,
              brokenLinesLengthPercentage: 0.5,
              lightStickWidth: [0.12, 0.5],
              lightStickHeight: [1.3, 1.7],
              movingAwaySpeed: [60, 80],
              movingCloserSpeed: [-120, -160],
              carLightsLength: [400 * 0.03, 400 * 0.2],
              carLightsRadius: [0.05, 0.14],
              carWidthPercentage: [0.3, 0.5],
              carShiftX: [-0.8, 0.8],
              carFloorSeparation: [0, 5],
              colors: {
                roadColor: 0x080808,
                islandColor: 0x0a0a0a,
                background: 0x000000,
                shoulderLines: 0xffffff,
                brokenLines: 0xffffff,
                leftCars: [0xd856bf, 0x6750a2, 0xc247ac],
                rightCars: [0x03b3c3, 0x0e5ea5, 0x324555],
                sticks: 0x03b3c3,
              },
            }}
          />
        </div>
      </section>

      <section className="py-20 px-6 bg-neutral-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-playfair mb-12 text-center">
            Why Choose Virtual Tours?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
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

      <RoomList />
    </div>
  );
}
