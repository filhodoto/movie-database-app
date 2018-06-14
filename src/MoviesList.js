/* eslint react/no-did-mount-set-state: 0 */

import React, { Component } from 'react';
import Movie from './Movie';

export default class MoviesList extends Component {

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
    <div>
      {/*Map overt each movie an output movie component*/}
      {this.state.movies.map(movie => <Movie key={movie.id} movie={movie} />)}
    </div>
    );
  }
}
