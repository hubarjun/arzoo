import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import "@google/model-viewer";

const ARViewer = () => {
  const { modelId } = useParams();

  const models = {
    1: {
      src: "/glb/humananatomy.glb",
      title: "Human Anatomy",
      iosSrc:
        "https://cdn.glitch.me/3bd5a0b4-ef13-48fc-9b85-6ea12e379d3b/Lymphatic%20System%203D%20Model%20HAWA%20ios.usdz?v=1743068521600",
    },
    2: {
      src: "https://cdn.glitch.global/3bd5a0b4-ef13-48fc-9b85-6ea12e379d3b/solar_system_animation.glb?v=1741894978046s",
      title: "Solar System",
      iosSrc: "",
    },
    3: {
      src: "https://cdn.glitch.global/65466faf-bcbf-4e3a-a0a0-a031cc52bdd4/Engine%20HAWA.glb?v=1728290779263",
      title: "Mechanical Engine",
      iosSrc: "",
    },
  };

  const model = models[modelId];

  useEffect(() => {
    if (!customElements.get("model-viewer")) {
      customElements.define(
        "model-viewer",
        window.ModelViewer.ModelViewerElement
      );
    }
  }, []);

  return (
    <div className="h-screen w-full flex flex-col my-6">
      <div className="flex-1 relative">
        <model-viewer
          src={model.src}
          alt={model.title}
          ios-src={model.iosSrc}
          shadow-intensity="1"
          autoplay
          ar
          ar-modes="scene-viewer webxr quick-look"
          camera-controls
          auto-rotate
          style={{ width: "100%", height: "100%" }}
        >
          <button className="hidden" slot="ar-button">
            <p>Launch AR</p>
          </button>
        </model-viewer>
      </div>

      <div className=" flex-1 p-4 flex justify-center flex-col">
        <h2 className="text-xl font-bold my-6">{model.title}</h2>
        <button
          onClick={() => {
            const modelViewer = document.querySelector("model-viewer");
            modelViewer.activateAR();
            modelViewer.addEventListener("load", () => {
              modelViewer.play();
            });
          }}
          className="px-4 py-2  bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
        >
          <p className="text-white-500 font-bold tracking-wider  text-sm ">
            Launch AR
          </p>
        </button>
      </div>
    </div>
  );
};

export default ARViewer;
