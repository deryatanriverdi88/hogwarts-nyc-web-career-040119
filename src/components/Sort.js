import React, { Component } from 'react';
import '../App.css';

class Sort extends Component {

  sendSortValue  = (e) => {
    this.props.handleSort(e.target.value)
  }
  
  render() {
    return (
      <div className="select">
        <select onChange={this.sendSortValue}>
          <option value="All">All</option>
          <option value="Weight">Weight</option>
          <option value="Name">Name</option>
        </select>
      </div>
    );
  }

}

export default Sort;
