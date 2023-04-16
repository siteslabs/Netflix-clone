import { isEmpty } from "lodash";
import React from "react";
import MovieCard from "./MovieCard";
import { TMovie } from "@/types/api/movie";

interface MovieListProps {
  data: TMovie[];
  title: string;
}

const MovieList: React.FC<MovieListProps> = ({ data, title }) => {
  if (isEmpty(data)) return null;

  return (
    <div className="px-4 md:px-12 mt-4 space-y-8">
      <p className="text-white md:text-xl lg:text-2xl font-semibold mb-4">
        {title}
      </p>
      <div className="grid grid-cols-4 gap-2">
        {data.map((movie) => (
          <MovieCard key={movie.id} data={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
