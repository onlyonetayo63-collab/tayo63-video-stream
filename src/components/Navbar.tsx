import React, { useState, useEffect } from "react";
import { Search, Bell, LogOut, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  user: { email: string } | null;
  onAuthClick: () => void;
  onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ user, onAuthClick, onLogout }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        isScrolled ? "bg-black/90 backdrop-blur-md border-b border-white/10" : "bg-gradient-to-b from-black/80 to-transparent"
      }`}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="text-2xl font-black text-red-600 tracking-tighter cursor-pointer hover:scale-105 transition-transform">
            TAYO63MEDIA
          </div>
          
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-300">
            <a href="#" className="hover:text-white transition-colors">Home</a>
            <a href="#" className="hover:text-white transition-colors">Movies</a>
            <a href="#" className="hover:text-white transition-colors">Cartoons</a>
            <a href="#" className="hover:text-white transition-colors">Latest</a>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 text-gray-300 hover:text-white transition-colors">
            <Search size={20} />
          </button>
          
          <button className="hidden sm:block p-2 text-gray-300 hover:text-white transition-colors">
            <Bell size={20} />
          </button>

          {user ? (
            <div className="flex items-center gap-3">
              <span className="hidden lg:inline text-xs text-gray-400">{user.email}</span>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={onLogout}
                className="text-gray-300 hover:text-red-500"
              >
                <LogOut size={20} />
              </Button>
            </div>
          ) : (
            <Button 
              onClick={onAuthClick}
              className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 h-9"
            >
              Sign In
            </Button>
          )}

          <button 
            className="md:hidden p-2 text-gray-300 hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-4 text-gray-300">
              <a href="#" className="hover:text-white py-2 border-b border-white/5">Home</a>
              <a href="#" className="hover:text-white py-2 border-b border-white/5">Movies</a>
              <a href="#" className="hover:text-white py-2 border-b border-white/5">Cartoons</a>
              <a href="#" className="hover:text-white py-2">Latest</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;