import React, { Component } from 'react';

class Filter extends Component {

  sendFilterValue = () => {
    this.props.handleFilter()
  }

  render() {
    return (
      <div>
        <label htmlFor="filterBox"> Greased ?
          <input type="checkbox" id="filterBox" onChange={this.sendFilterValue}/>
        </label>
      </div>
    );
  }

}

export default Filter;
