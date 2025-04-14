import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import LandingPage from "./pages/LandingPage";
import RoomView from "./pages/RoomView";
import Navigation from "./components/Navigation";
import "./App.css";
import { RoomList } from "./components/RoomList";
import { RoomProvider } from "./context/RoomContext";
import SplashCursor from "./components/ui/SplashCursor";

function App() {
  return (
    <RoomProvider>
      <Router>
        <SplashCursor />
        <div className="min-h-screen bg-black text-white">
          <Navigation />
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/room/:roomId" element={<RoomView />} />
              <Route path="/rooms" element={<RoomList />} />
            </Routes>
          </AnimatePresence>
        </div>
      </Router>
    </RoomProvider>
  );
}

export default App;
