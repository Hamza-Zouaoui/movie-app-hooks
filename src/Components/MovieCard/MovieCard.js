import { click } from '@testing-library/user-event/dist/click';
import React from 'react';
import "./movieCard.css";

const MovieCard = ({movie}) => {
  return (
    <div className="MovieCard">
      <div>
        <img src={movie.posterUrl} width="300" />
      </div>
      <div >
        <h2>{movie.title}</h2>
        <p>{movie.description}</p>
        <h3>Rate: {movie.rate}</h3>
        <button>TRAILER</button>
        </div>
    </div>
  )
}

export default MovieCard