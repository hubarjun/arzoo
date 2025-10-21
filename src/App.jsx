import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import LandingPage from "./pages/LandingPage";
import RoomView from "./pages/RoomView";
import Navigation from "./components/Navigation";
import "./App.css";
import { RoomList } from "./components/RoomList";
import { RoomProvider } from "./context/RoomContext";
import ModelList from "./pages/ModelList";
import ARViewer from "./components/ARViewer";

function App() {
  return (
    <RoomProvider>
      <Router>
        <div className="min-h-screen bg-black text-white">
          <Navigation />
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              {/* <Route path="/room/:roomId" element={<RoomView />} /> */}
              {/* <Route path="/rooms" element={<RoomList />} /> */}
              <Route path="/models" element={<ModelList />} />
              <Route path="/ar/:modelId" element={<ARViewer />} />
            </Routes>
          </AnimatePresence>
        </div>
      </Router>
    </RoomProvider>
  );
}

export default App;
