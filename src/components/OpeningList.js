import React, { Component } from 'react';
import Movie from '../components/Movie.js'


class OpeningList extends Component {
  render() {
    const movieNodes = this.props.data.map((movie) => {
      return (
        <Movie key={movie.id} title={movie.title}/>
      )
    })

    return (
      <div className="opening-list">
        {movieNodes}
      </div>
    )
  }
}

export default OpeningList;
