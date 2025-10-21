import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import "@google/model-viewer";

const ARViewer = () => {
  const { modelId } = useParams();

  const models = {
    1: {
      src: "/glb/deer.glb",
      title: "Deer",
      iosSrc: "",
    },
    2: {
      src: "/glb/elephantfinal.glb",
      title: "Elephant",
      iosSrc: "",
    },
    3: {
      src: "/glb/tiger_rebuilt.glb",
      title: "Tiger",
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
