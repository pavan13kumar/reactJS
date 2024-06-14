import React, { Component } from 'react'

class EventBinding extends Component {
    constructor(props) {
      super(props)
        this.state={
            Element:"EventBinding"
        }
     
    }
    ClickHandler(){
        this.setState({Element:"Hiii"})
        // alert(`hello ${this.state.Element}`)
        // console.log(this);
    }

  render() {
    return (
      <div>
        <h1> {this.state.Element}</h1>
        
        <button onClick={this.ClickHandler.bind(this)}>Click</button>
        {/* <button onClick={()=> this.ClickHandler()}>Click</button> */}
        {/* <button onClick={this.ClickHandler}>Click</button>  // use the callback function */}
        {/* <button onClick={this.ClickHandler}>Click</button>  //use this after state object (this.ClickHandler=this.ClickHandler.bind(this);) */}
      </div>
    )
  }
}

export default EventBinding
 
