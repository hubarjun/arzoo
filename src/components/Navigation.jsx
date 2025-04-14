import { motion } from 'framer-motion';
import { Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function Navigation() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-lg border-b border-white/10"
    >
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Building2 className="w-8 h-8" />
          <span className="font-space text-xl">VirtualBuild</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-sm hover:text-white/70 transition-colors">
            Home
          </Link>
          <Link to="/rooms" className="text-sm hover:text-white/70 transition-colors">
            Rooms
          </Link>
          <Link to="/about" className="text-sm hover:text-white/70 transition-colors">
            About
          </Link>
          <Button variant="outline" className="border-white/20">
            Start Tour
          </Button>
        </nav>
      </div>
    </motion.header>
  );
}