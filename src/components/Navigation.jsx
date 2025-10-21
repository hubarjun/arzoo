import { motion } from "framer-motion";
import { Building2, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Navigation() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/10 backdrop-blur-sm border-b border-white/10"
    >
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2" onClick={closeMenu}>
          {/* <Building2 className="w-8 h-8" /> */}
          <span className="font-bold tracking-widest text-2xl">ARzoo</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Button variant="outline" className="border-white/20">
            <Link to="/" className="text-sm  transition-colors">
              Home
            </Link>
          </Button>

          {/* <Button variant="outline" className="border-white/20">
            <Link to="/rooms" className="text-sm transition-colors">
              Virtual reality
            </Link>
          </Button> */}
          <Button variant="outline" className="border-white/20">
            <Link to="/models" className="text-sm transition-colors">
              Augmented Reality
            </Link>
          </Button>
        </nav>

        {/* Mobile controls */}
        <div className="md:hidden flex items-center">
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="p-2 rounded-md hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-white/30"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu (slide down) */}
      <div
        className={`md:hidden transition-max-height duration-300 ease-in-out overflow-hidden bg-black/60 border-t border-white/5 ${
          open ? "max-h-60" : "max-h-0"
        }`}
      >
        <div className="px-6 py-4 flex flex-col gap-3">
          <Link to="/" onClick={closeMenu} className="text-sm">
            Home
          </Link>
          {/* <Link to="/rooms" onClick={closeMenu} className="text-sm">
            Virtual reality
          </Link> */}
          <Link to="/models" onClick={closeMenu} className="text-sm">
            Augmented Reality
          </Link>
        </div>
      </div>
    </motion.header>
  );
}
