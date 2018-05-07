import React, { Component } from 'react';
import OpeningList from '../components/OpeningList.js'


class OpeningBox extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [
        {id: 1, title:'Infinity War'},
        {id: 2, title:'The Princess Bride'},
        {id: 3, title:'Thor 75'},
        {id: 4, title:'Sherlock Gnomes'},
        {id: 5, title:'Mission Impossible: Things Just Got Impossibler'},
      ]
    }
  }

  render() {
    return(
      <div className="opening-box">
        <h2>Movies coming out this week</h2>
        <OpeningList data={this.state.data}/>
      </div>
    )
  }
}

export default OpeningBox;
