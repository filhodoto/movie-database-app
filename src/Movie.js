import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Movie extends Component {

  /**
   * Define propTypes for our props
   * Notes: Should always have "isRequired" or a default value
   * @type {{movie}}
   */
  static propTypes = {
    movie: PropTypes.shape({
      title: PropTypes.string.isRequired
    })
  };

  /**
   * Define default values for props that arent required
   */
  static defaultProps = {
    description: 'No description for this'
  }

  render() {
    const { title } = this.props.movie;
    return (
      <div>
        <h3>{title}</h3>
        <p>{this.props.description}</p>
      </div>
    )
  }
}