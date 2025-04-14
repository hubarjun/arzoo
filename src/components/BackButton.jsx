import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function BackButton() {
  return (
    <Link
      to="/"
      className="fixed top-4 left-4 z-40 bg-black/50 backdrop-blur-sm rounded-full p-2 hover:bg-black/70 transition-colors"
    >
      <ArrowLeft className="w-6 h-6" />
    </Link>
  );
}