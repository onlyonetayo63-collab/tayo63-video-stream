import React, { useState } from "react";
import { Toaster } from "sonner";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MovieRow from "./components/MovieRow";
import Footer from "./components/Footer";
import AuthModal from "./components/AuthModal";
import VideoPlayer from "./components/VideoPlayer";
import AdSlot from "./components/AdSlot";

export type Movie = {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  videoUrl: string;
  description: string;
  year: string;
  rating: string;
};

const MOVIES: Movie[] = [
  {
    id: "1",
    title: "Interstellar Odyssey",
    category: "Sci-Fi",
    imageUrl: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/efe5b812-349b-442a-a75b-07234989cfba/sci-fi-epic-934e4401-1778759315369.webp",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    description: "A team of explorers travel beyond this galaxy to discover whether mankind has a future among the stars.",
    year: "2024",
    rating: "PG-13"
  },
  {
    id: "2",
    title: "The Great Heist",
    category: "Action",
    imageUrl: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/efe5b812-349b-442a-a75b-07234989cfba/action-heist-03c48d84-1778759314224.webp",
    videoUrl: "https://www.w3schools.com/html/movie.mp4",
    description: "A group of skilled professionals attempt the most daring bank robbery in history.",
    year: "2023",
    rating: "R"
  },
  {
    id: "3",
    title: "Skyward Adventure",
    category: "Cartoon",
    imageUrl: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/efe5b812-349b-442a-a75b-07234989cfba/cartoon-adventure-4b8d6c1e-1778759314676.webp",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    description: "An unlikely duo embarks on a journey across the sky in a flying house.",
    year: "2024",
    rating: "G"
  },
  {
    id: "4",
    title: "Eternal Echoes",
    category: "Romance",
    imageUrl: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/efe5b812-349b-442a-a75b-07234989cfba/romantic-drama-ecbfe026-1778759315337.webp",
    videoUrl: "https://www.w3schools.com/html/movie.mp4",
    description: "Two souls find each other across different lifetimes in this heart-wrenching tale.",
    year: "2024",
    rating: "PG"
  },
  {
    id: "5",
    title: "Wild Horizons",
    category: "Documentary",
    imageUrl: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/efe5b812-349b-442a-a75b-07234989cfba/nature-documentary-99f129ca-1778759314497.webp",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    description: "Explore the untouched beauty of the world's most remote wilderness areas.",
    year: "2023",
    rating: "G"
  },
  {
    id: "6",
    title: "Cyber Dawn",
    category: "Anime",
    imageUrl: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/efe5b812-349b-442a-a75b-07234989cfba/anime-epic-2f37118f-1778759314359.webp",
    videoUrl: "https://www.w3schools.com/html/movie.mp4",
    description: "In a neon-drenched future, a rogue AI fights for its right to exist.",
    year: "2024",
    rating: "TV-MA"
  }
];

function App() {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [user, setUser] = useState<{ email: string } | null>(null);

  const handleMovieSelect = (movie: Movie) => {
    setSelectedMovie(movie);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLogin = (email: string) => {
    setUser({ email });
    setIsAuthOpen(false);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-red-600 selection:text-white">
      <Toaster position="top-center" richColors />
      
      <Navbar 
        user={user} 
        onAuthClick={() => setIsAuthOpen(true)} 
        onLogout={handleLogout}
      />

      <main className="pb-20">
        {selectedMovie ? (
          <VideoPlayer 
            movie={selectedMovie} 
            onClose={() => setSelectedMovie(null)} 
          />
        ) : (
          <Hero 
            featuredMovie={MOVIES[0]} 
            onPlay={() => handleMovieSelect(MOVIES[0])} 
          />
        )}

        <div className="container mx-auto px-4 mt-8">
          <AdSlot position="top" />
          
          <MovieRow 
            title="Trending Now" 
            movies={MOVIES} 
            onMovieClick={handleMovieSelect} 
          />
          
          <AdSlot position="middle" />

          <MovieRow 
            title="Cartoons & Animation" 
            movies={MOVIES.filter(m => ["Cartoon", "Anime"].includes(m.category))} 
            onMovieClick={handleMovieSelect} 
          />

          <MovieRow 
            title="Action & Thrillers" 
            movies={MOVIES.filter(m => ["Action", "Sci-Fi"].includes(m.category))} 
            onMovieClick={handleMovieSelect} 
          />

          <AdSlot position="bottom" />
        </div>
      </main>

      <Footer />

      <AuthModal 
        isOpen={isAuthOpen} 
        onClose={() => setIsAuthOpen(false)} 
        onLogin={handleLogin} 
      />
    </div>
  );
}

export default App;