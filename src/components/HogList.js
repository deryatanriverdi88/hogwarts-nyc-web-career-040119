import React, { Component } from 'react';
import HogTile from './HogTile'

class HogList extends Component {

  render() {
    // console.log(this.props.data)
    return (
        <ul className="ui grid container">
          {
            this.props.data.map(function(hog, index){
              return <HogTile key={index} hog={hog}/>
            })
          }
        </ul>
    );
  }

}

export default HogList;
