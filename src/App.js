import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Movie from "./Movie";

class App extends Component {

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
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Movie database</h1>
        </header>
        {/*Map overt each movie an output movie component*/}
        {this.state.movies.map( movie => <Movie key={movie.id} movie={movie} description={movie.overview} /> )}
      </div>
    );
  }
}

export default App;