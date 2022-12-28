import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({ id, title, year, summary, poster }) {
  return (
    <div className="movie">
      <img className="movie__poster" src={poster} alt={id} title={title} />

      <div className="movie__data">
        <h3 className="movie__title">{title}</h3>
        <h5 className="movie__year">{year}</h5>
        <p className="movie__summary">{summary}</p>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

//movie component는 state를 필요로 하지 않기 때문에 굳이 class component 로 쓸 필요는 없다.

export default Movie;