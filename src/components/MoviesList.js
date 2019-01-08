/* eslint react/no-did-mount-set-state: 0 */
/**
 * @flow
 */
import React, { Component } from 'react';
import styled from 'styled-components';
import Movie from './Movie';
import type {MovieType} from './../flow-types/Movies';

type State = {
  movies: Array<MovieType>
}

export default class MoviesList extends Component<{}, State> {

  /**
   * Set default state
   */
  state = {
    movies: []
  };

  /**
   * Define default values for props that arent required
   */
  async componentDidMount() {
    try {
      // Api call
      const result = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=b01d116084668e4b15d36351e4941996&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1');

      // Wait for json to be ready and save it in variable
      const movies = await result.json();
      console.log(movies);
      // Update state with api results
      this.setState({
        movies: movies.results
      })
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <MovieGrid>
        {/*Map overt each movie an output movie component*/}
        {this.state.movies.map(movie => <Movie key={movie.id} movie={movie} />)}
      </MovieGrid>
    );
  }
}

/**
 * Define styled components
 */
const MovieGrid = styled.div`
  display: grid;
  padding: 10px;
  grid-template-columns: repeat(7, 2fr);
  grid-row-gap: 10px;
`;
