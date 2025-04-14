import { motion } from 'framer-motion';
import { Building2, Home, ChefHat, Bed } from 'lucide-react';
import { Button } from '@/components/ui/button';
import RoomCard from '@/components/RoomCard';
import { Link } from 'react-router-dom';

const rooms = [
  {
    id: 'bedroom',
    title: 'Master Bedroom',
    description: 'Experience our luxurious master bedroom design',
    icon: Bed,
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80',
  },
  {
    id: 'kitchen',
    title: 'Modern Kitchen',
    description: 'State-of-the-art kitchen with premium appliances',
    icon: ChefHat,
    image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&q=80',
  },
];

const features = [
  {
    icon: Building2,
    title: "Visualize Your Space",
    description: "See exactly how your future home will look and feel"
  },
  {
    icon: Home,
    title: "Make Informed Decisions",
    description: "Adjust designs before construction begins"
  },
  {
    icon: Building2,
    title: "Save Time & Money",
    description: "Prevent costly modifications during construction"
  }
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
          <h1 className="text-6xl md:text-8xl font-playfair mb-6">
            Experience Your Home
            <br />
            Before It's Built
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-space">
            Virtual reality tours of your future living space
          </p>
          <Button
            size="lg"
            className="bg-white text-black hover:bg-gray-200 transition-all"
            asChild
          >
            <Link to="/room/">Explore Rooms</Link>
          </Button>
        </motion.div>

        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute w-[800px] h-[800px] border border-white/10 rounded-full"
        />
      </section>

      <section className="py-20 px-6 bg-neutral-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-playfair mb-12 text-center">Why Choose Virtual Tours?</h2>
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

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-playfair mb-12 text-center">Explore Rooms</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {rooms.map((room) => (
              <RoomCard key={room.id} {...room} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}