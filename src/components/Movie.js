/**
 * @flow
 */
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Overdrive from 'react-overdrive';
import type {MovieType} from './../flow-types/Movies';
const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';

/**
 * Define flowTypes for a FSC
 */
type MovieTypeFix = {
  movie: MovieType
}
/**
 * Functional Stateless Component
 * Passing props into function -> ({movie}) = (props.movie) using es6 destructuring
 */
const Movie = ({ movie }: MovieTypeFix) => (
  <div>
    <Link to={`/${movie.id}`}>
      <Overdrive id={`${movie.id}`}>
        <MoviePoster src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
      </Overdrive>
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
 * Define styled components
 */
export const MoviePoster = styled.img`
  box-shadow: 0 0 35px black;
`;
