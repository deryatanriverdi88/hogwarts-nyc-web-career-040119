import React, { Component } from 'react';

class HogTile extends Component {
   state ={
     hiddenHog:true
   }

  getHogImage = () => {
    let fileName = this.props.hog.name.replace(/\s/g, "_").toLowerCase()
    this.hogFileName = `../hog-imgs/${fileName}.jpg`
    // console.log(this.hogFileName)
    return this.hogFileName
  }

  handleHog = () =>{
    // console.log(this.state.hidden
    this.state.hiddenHog === true ?
    this.setState({
      hiddenHog:false
    }) :
    this.setState({
      hiddenHog:true
    })
    // console.log(this.state.hidden)
  }

  render() {
    // console.log(this.props.hog)
    return (
      <div className="ui eight wide column" >
        <h2> {this.props.hog.name} </h2>
        <img src={ this.getHogImage()} alt={this.getHogImage()}/>
        <button onClick={this.handleHog}> See More Details </button>
          <div className="see-more-info" hidden={this.state.hiddenHog}>
            <p> Specialty :{this.props.hog.specialty}</p>
            <p> Highest Medal Achieved : {this.props.hog['highest medal achieved']}</p>
            <p> Weight : {this.props.hog.weight}</p>
          </div>

      </div>

    );
  }

}

export default HogTile;
