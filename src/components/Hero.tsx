import React from "react";
import { Play, Info } from "lucide-react";
import { Button } from "./ui/button";
import { Movie } from "../App";
import { motion } from "framer-motion";

interface HeroProps {
  featuredMovie: Movie;
  onPlay: () => void;
}

const Hero: React.FC<HeroProps> = ({ featuredMovie, onPlay }) => {
  return (
    <div className="relative h-[80vh] w-full overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 hover:scale-105"
        style={{ backgroundImage: `url(${featuredMovie.imageUrl})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
      </div>

      <div className="relative container mx-auto px-4 h-full flex flex-col justify-end pb-24 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-3 py-1 bg-red-600 text-[10px] font-black uppercase tracking-widest rounded mb-4">
            Featured Content
          </span>
          <h1 className="text-5xl md:text-7xl font-black mb-4 tracking-tighter drop-shadow-2xl">
            {featuredMovie.title}
          </h1>
          <div className="flex items-center gap-3 text-sm font-medium mb-6 text-gray-300">
            <span className="text-green-500 font-bold">98% Match</span>
            <span>{featuredMovie.year}</span>
            <span className="border border-white/30 px-1.5 py-0.5 rounded text-[10px]">{featuredMovie.rating}</span>
            <span>{featuredMovie.category}</span>
          </div>
          <p className="text-lg text-gray-200 mb-8 line-clamp-3 leading-relaxed drop-shadow-md">
            {featuredMovie.description}
          </p>
          <div className="flex flex-wrap gap-4">
            <Button 
              onClick={onPlay}
              className="bg-white hover:bg-white/90 text-black font-bold h-12 px-8 flex items-center gap-2"
            >
              <Play fill="black" size={20} />
              Watch Now
            </Button>
            <Button 
              variant="secondary"
              className="bg-gray-500/30 hover:bg-gray-500/50 text-white font-bold h-12 px-8 backdrop-blur-md flex items-center gap-2"
            >
              <Info size={20} />
              More Info
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;