/* eslint react/no-did-mount-set-state: 0 */

import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import MoviesList from './MoviesList';

/**
 * Functional Stateless Component
 */
const App = () => (
  <Router>
    <div className="App">
      <header className="App-header">
        <Link to="/">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Movie database</h1>
        </Link>
      </header>
      <Switch>
        <Route exact path="/" component={MoviesList} />
        <Route path="/:id" component={MovieDetails} />
      </Switch>
    </div>
  </Router>
);

export default App;

/**
 * Movie detail component
 * Receive "match" from route and use it to get id param
 * "match" is where the params are stored inside React Router
 */
const MovieDetails = ({match}) => (
  <h1>{match.params.id}</h1>
)