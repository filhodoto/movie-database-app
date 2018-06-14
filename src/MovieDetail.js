import React, {Component} from 'react';
import PropTypes from 'prop-types';

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';
const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w1280';

/**
 * Movie detail component
 * Notes:
 * "match" is where the params are stored inside React Router
 */
// const MovieDetail = ({match}) => (
//   <h1>{match.params.id}</h1>
// )

export default class MovieDetail extends Component {

  /**
   * Set default state
   */
  state = {
    movie: {},
  };


  async componentDidMount() {
    try {
      const movieId = this.props.match.params.id; // Access movie id from match inide props
      const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=b01d116084668e4b15d36351e4941996&language=en-US`);
      const movie = await response.json();

      this.setState({
        movie,
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    const { movie } = this.state;
    return (
      <div>
        <img src={`${BACKDROP_PATH}${movie.backdrop_path}`} alt={movie.title}/>
        <h1>{movie.title}</h1>
        <h2>{movie.release_date}</h2>
        <p>{movie.overview}</p>
      </div>
    )
  }
}
