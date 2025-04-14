import React, { createContext, useContext } from "react";
import { ChefHat, Bed, BathIcon } from "lucide-react";

const rooms = [
  {
    id: "bedroom",
    title: "Master Bedroom",
    description:
      "Luxurious master suite with modern furnishings and ambient lighting",
    icon: Bed,
    image:
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80",
  },
  {
    id: "kitchen",
    title: "Modern Kitchen",
    description:
      "State-of-the-art kitchen with premium appliances and elegant design",
    icon: ChefHat,
    image:
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&q=80",
  },
  {
    id: "bathroom",
    title: "Modern Bathroom",
    description:
      "Sleek bathroom featuring contemporary fixtures and minimalist design",
    icon: BathIcon,
    image:
      "https://images.unsplash.com/photo-1517414628894-83d47b22f233?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRvaWxldHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: "LivingRoom",
    title: "Living Room",
    description:
      "Contemporary living space with comfortable and modern aesthetics",
    icon: BathIcon,
    image:
      "https://images.unsplash.com/photo-1517414628894-83d47b22f233?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRvaWxldHxlbnwwfHwwfHx8MA%3D%3D",
  },
];

const RoomContext = createContext();

export const RoomProvider = ({ children }) => {
  return (
    <RoomContext.Provider value={{ rooms }}>{children}</RoomContext.Provider>
  );
};

export const useRooms = () => useContext(RoomContext);
