import React, { Component } from 'react';
import Filter from './Filter';
import Sort from './Sort';

class FilterBar extends Component {

  render() {
    return (
      <div>
       <Filter handleFilter={this.props.handleFilter}/>
       <Sort handleSort={this.props.handleSort}/>
      </div>
    );
  }

}

export default FilterBar;
