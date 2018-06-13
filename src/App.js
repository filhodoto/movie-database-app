import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Movie from "./Movie";

const movies = [
  {
    id: 1,
    title: 'Star Wars'
  },
  {
    id: 2,
    title: 'La Cucaratxa Borracha'
  },
  {
    id: 3,
    title: 'Deadpool'
  },
  {
    id: 4,
    title: 'Say what?!'
  },
];

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Movie database</h1>
        </header>
        {/*Map overt each movie an output movie component*/}
        {movies.map( movie => <Movie key={movie.id} movie={movie} /> )}
      </div>
    );
  }
}

export default App;