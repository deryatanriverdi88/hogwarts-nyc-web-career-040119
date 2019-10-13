import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogList from './HogList'
import FilterBar from './FilterBar'

class App extends Component {

  state = {
    sortValue: "All",
    filter: false
  }

  handleSort = (newSortValue) =>{
    this.setState({
      sortValue: newSortValue
    })
  }

  handleFilter = () => {
    this.setState({
      filter: !this.state.filter
    })
    // console.log(this.state)
  }

  sortHogs = () => {
    let {sortValue} = this.state
    if (sortValue === "Name"){
      return [...hogs].sort((hogA, hogB) => {
        if(hogA.name > hogB.name){
          return 1
        } else if (hogA.name < hogB.name) {
          return -1
        }
        else {
          return 0
        }
      })
    }
    else if (sortValue === "Weight") {
      return [...hogs].sort((hogA, hogB) => {
        if (hogA.weight > hogB.weight){
          return 1
        }
        else if (hogA.weight < hogB.weight) {
          return -1
        }
        else {
          return 0
        }
      })
    }
    else{
      return [...hogs]
    }
  }

  filterHogs = (sortedHogs)  =>  {
    let {filter} = this.state
    return filter ?
    sortedHogs.filter(hog => {
       return hog.greased})
    : sortedHogs
  }

  render() {
    // {console.log(hogs)}
    return (
      <div className="App">
          <Nav />
          <FilterBar handleSort={this.handleSort} handleFilter={this.handleFilter} />
          <HogList data={ this.filterHogs(this.sortHogs())}/>
      </div>
    )
  }
}

export default App;
