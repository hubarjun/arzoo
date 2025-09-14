import React, { createContext, useContext } from "react";
import { ChefHat, Bed, BathIcon } from "lucide-react";

const rooms = [
  {
    id: "virtualLab",
    title: "virtual Lab",
    description: "virtual Lab for to educate students in virtual reality ",
    icon: Bed,
    image:
      "https://images.unsplash.com/photo-1530213786676-41ad9f7736f6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const RoomContext = createContext();

export const RoomProvider = ({ children }) => {
  return (
    <RoomContext.Provider value={{ rooms }}>{children}</RoomContext.Provider>
  );
};

export const useRooms = () => useContext(RoomContext);
