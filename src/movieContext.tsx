import React, { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import movies from "./data.test"; // load once
import type { Movie } from "./components/MovieCard";

const MovieContext = createContext<MovieContextType | null>(null);
type MovieContextType = {
  Movies: Movie[];
  toggleLike: (id: number) => void;
};
export const MovieProvider = ({ children }:{children:ReactNode}) => {
  const [Movies, setMovies] = useState<Movie[]>([]);

  // Initialize once
  useEffect(() => {
    setMovies(movies);
  }, []);

  const toggleLike = (id:Number) => {
    setMovies(prev =>
      prev.map(movie =>
        movie.id === id ? { ...movie, like: !movie.like } : movie
      )
    );
  };

  return (
    <MovieContext.Provider value={{ Movies, toggleLike }}>
      {children}
    </MovieContext.Provider>
  );
};

const useMovies = (): MovieContextType => {
  const context = useContext(MovieContext);
  if (!context) throw new Error("useMovies must be used within MovieProvider");
  return context;
};

export default useMovies