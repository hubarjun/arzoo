import { useRooms } from "../context/RoomContext";
import RoomCard from "./RoomCard";

export const RoomList = () => {
  const { rooms } = useRooms();

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-playfair mb-12 text-center">
          Explore Rooms
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {rooms.map((room) => (
            <RoomCard key={room.id} {...room} />
          ))}
        </div>
      </div>
    </section>
  );
};
