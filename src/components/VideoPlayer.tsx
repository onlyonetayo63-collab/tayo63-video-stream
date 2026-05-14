import React, { useRef, useState } from "react";
import { Movie } from "../App";
import { X, Maximize, Volume2, VolumeX, Play, Pause, RotateCcw, SkipForward } from "lucide-react";
import { motion } from "framer-motion";

interface VideoPlayerProps {
  movie: Movie;
  onClose: () => void;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ movie, onClose }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) videoRef.current.pause();
      else videoRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const progress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(progress);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative w-full aspect-video bg-black group"
    >
      <video
        ref={videoRef}
        src={movie.videoUrl}
        className="w-full h-full object-contain"
        autoPlay
        onTimeUpdate={handleTimeUpdate}
        onClick={togglePlay}
      />

      <button 
        onClick={onClose}
        className="absolute top-6 left-6 z-20 p-2 bg-black/40 hover:bg-black/80 rounded-full transition-colors backdrop-blur-sm border border-white/10"
      >
        <X size={24} />
      </button>

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
        <div className="mb-4">
          <h2 className="text-2xl font-bold">{movie.title}</h2>
          <p className="text-sm text-gray-400">{movie.category} • {movie.year}</p>
        </div>

        <div className="w-full h-1 bg-gray-600 rounded-full mb-6 cursor-pointer relative">
          <div 
            className="absolute top-0 left-0 h-full bg-red-600 rounded-full transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <button onClick={togglePlay} className="hover:scale-110 transition-transform">
              {isPlaying ? <Pause size={28} /> : <Play size={28} />}
            </button>
            <button className="hover:scale-110 transition-transform">
              <RotateCcw size={24} />
            </button>
            <button className="hover:scale-110 transition-transform">
              <SkipForward size={24} />
            </button>
            <button onClick={() => setIsMuted(!isMuted)} className="hover:scale-110 transition-transform">
              {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
            </button>
          </div>

          <button className="hover:scale-110 transition-transform">
            <Maximize size={24} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default VideoPlayer;