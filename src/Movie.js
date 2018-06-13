import React from 'react';
import PropTypes from 'prop-types';

/**
 * Functional Stateless Component
 * Passing props into function -> ({movie}) = (props.movie) using es6 destructuring
 */
const Movie = ({movie}) => {
  return (
    <div>
      <h3>{movie.title}</h3>
      <p>{movie.overview}</p>
    </div>
  );
};

/**
 * Export function
 * Notes: FSC need to be exported like this
 * can't use default when defining const
 */
export default Movie;

/**
 * Define propTypes for a FSC
 * Notes: Should always have "isRequired" or a default value
 */
Movie.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
  }).isRequired,
};

