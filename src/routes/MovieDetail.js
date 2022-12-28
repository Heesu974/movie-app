import React from "react";
import { useLocation, redirect } from "react-router-dom";

function MovieDetail() {
  const location = useLocation();
  const { pathname } = location;

  console.log(location);
  console.log(location.pathname);

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
