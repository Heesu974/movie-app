import React from "react";
import PropTypes from "prop-types";

function Movie({ id, title, summary, poster }) {
  return <h1>{title}</h1>;
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

//movie component는 state를 필요로 하지 않기 때문에 굳이 class component 로 쓸 필요는 없다.

export default Movie;
