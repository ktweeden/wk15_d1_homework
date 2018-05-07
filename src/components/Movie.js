import React, { Component } from 'react';

class Movie extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="movie">
        <h4>{this.props.title}</h4>
      </div>
    )
  }
}

export default Movie;
