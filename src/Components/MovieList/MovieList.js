import React from 'react';
import "./movieList.css";
import MovieCard from "../MovieCard/MovieCard.js";

const MovieList = ({movies}) => {
  return (
    <div className="MovieList">{movies.map((movie)=>(
        <MovieCard movie={movie} />
    ))}</div>
  )
}

export default MovieList