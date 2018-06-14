import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';

/**
 * Functional Stateless Component
 * Passing props into function -> ({movie}) = (props.movie) using es6 destructuring
 */
const Movie = ({ movie }) => (
  <div>
    <Link to={`/${movie.id}`}>
      <MoviePoster src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title}/>
    </Link>
  </div>
);

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

/**
 * Define styled components
 */
export const MoviePoster = styled.img`
  box-shadow: 0 0 35px black;
`;
