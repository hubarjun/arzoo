import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import LoadingSpinner from "@/components/LoadingSpinner";
import BackButton from "@/components/BackButton";

const roomData = {
  bedroom: {
    title: "Master Bedroom",
    model:
      "https://cdn.glitch.global/b8e5e60f-8a24-4f42-a8c9-e3bc37658d0c/bedroom.glb",
  },
  kitchen: {
    title: "Modern Kitchen",
    model:
      "https://cdn.glitch.global/b8e5e60f-8a24-4f42-a8c9-e3bc37658d0c/kitchen.glb",
  },
};

export default function RoomView() {
  const { roomId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const room = roomId ? roomData[roomId] : null;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!room) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-space mb-4">Room not found</h1>
          <Link to="/">
            <Button variant="outline">Return Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative">
      {isLoading && <LoadingSpinner />}
      <BackButton />

      <div className="absolute inset-0">
        <a-scene>
          <a-sky color="black"></a-sky>

          <a-entity
            gltf-model={room.model}
            animation-mixer
            position="0 -1 0"
            scale="2 2 2"
          ></a-entity>

          <a-entity
            id="rig"
            position="0 0 0"
            movement-controls="constrainToNavMesh: true"
          >
            <a-camera>
              <a-cursor color="white"></a-cursor>
            </a-camera>

            <a-entity
              id="leftHand"
              oculus-touch-controls="hand: left"
              thumbstick-teleport
              teleport-controls="cameraRig: #rig; teleportOrigin: #camera;"
            ></a-entity>

            <a-entity
              id="rightHand"
              oculus-touch-controls="hand: right"
              thumbstick-rotate
            ></a-entity>
          </a-entity>
        </a-scene>
      </div>
    </div>
  );
}
