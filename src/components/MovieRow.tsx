import React from "react";
import { Movie } from "../App";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

interface MovieRowProps {
  title: string;
  movies: Movie[];
  onMovieClick: (movie: Movie) => void;
}

const MovieRow: React.FC<MovieRowProps> = ({ title, movies, onMovieClick }) => {
  return (
    <div className="py-8">
      <h2 className="text-xl font-bold mb-4 px-2">{title}</h2>
      
      <div className="flex overflow-x-auto pb-4 gap-4 no-scrollbar scroll-smooth">
        {movies.map((movie) => (
          <motion.div
            key={movie.id}
            whileHover={{ scale: 1.05, zIndex: 10 }}
            className="flex-none w-[200px] md:w-[280px] group relative cursor-pointer"
            onClick={() => onMovieClick(movie)}
          >
            <div className="aspect-[16/9] rounded-lg overflow-hidden bg-gray-900 border border-white/5">
              <img 
                src={movie.imageUrl} 
                alt={movie.title}
                className="w-full h-full object-cover transition-transform group-hover:opacity-40"
              />
              
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                  <Play fill="white" size={24} className="ml-1" />
                </div>
              </div>
            </div>
            
            <div className="mt-2 px-1">
              <h3 className="font-semibold text-sm line-clamp-1 group-hover:text-red-500 transition-colors">
                {movie.title}
              </h3>
              <div className="flex items-center gap-2 text-[10px] text-gray-500 mt-1">
                <span>{movie.year}</span>
                <span>•</span>
                <span>{movie.category}</span>
                <span className="border border-white/10 px-1 rounded">{movie.rating}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MovieRow;