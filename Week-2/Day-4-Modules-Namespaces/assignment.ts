// assignment.ts
// What this file demonstrates: an assignment organizing Movie-related utilities using a namespace
// Concepts used: namespaces, exported functions/interfaces within a namespace

export {}; // treat this file as its own module scope, avoids clashes with other day files

// Expected output: printed movie data using grouped utility functions

// Assignment: group related Movie utilities under one namespace (simulating a "MovieUtils" module).

namespace MovieUtils {
  export interface Movie {
    title: string;
    year: number;
    rating: number;
  }

  export function formatMovie(movie: Movie): string {
    return `${movie.title} (${movie.year}) - Rating: ${movie.rating}/10`;
  }

  export function isHighlyRated(movie: Movie): boolean {
    return movie.rating >= 8;
  }

  export function sortByRating(movies: Movie[]): Movie[] {
    return [...movies].sort((a, b) => b.rating - a.rating);
  }
}

const movieList: MovieUtils.Movie[] = [
  { title: "The Matrix", year: 1999, rating: 8.7 },
  { title: "Speed Racer", year: 2008, rating: 6.1 },
  { title: "Interstellar", year: 2014, rating: 8.6 },
];

const sortedMovies = MovieUtils.sortByRating(movieList);
sortedMovies.forEach((movie) => {
  console.log(MovieUtils.formatMovie(movie));
  console.log("Highly rated:", MovieUtils.isHighlyRated(movie));
});

/*
  In a real multi-file project, this namespace would instead be a module:

  // movieUtils.ts
  export interface Movie { title: string; year: number; rating: number; }
  export function formatMovie(movie: Movie): string { ... }
  export function isHighlyRated(movie: Movie): boolean { ... }

  // assignment.ts
  import { Movie, formatMovie, isHighlyRated } from "./movieUtils";
*/
