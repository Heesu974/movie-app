import React from "react";
import { useLocation } from "react-router-dom";

function MovieDetail() {
  const location = useLocation();

  const {
    state: {
      movieId,
      movieTitle,
      movieYear,
      movieSummary,
      moviePoster,
      movieGenres,
    },
  } = location;

  return (
    <div>
      <h3>{movieTitle}</h3>
      <h3>{movieYear}</h3>
      <h3>{movieSummary}</h3>
    </div>
  );
}

export default MovieDetail;
