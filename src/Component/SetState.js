import React, { Component } from 'react'
class SetState extends Component {
    constructor(props) {
      super(props)
    //setState
      this.state = {
         Element1:"hello",
         Element2:"Welcome"
      }
    }

    Handler=()=>{
       this.setState({Element1:"Hii"})
    }
    
  render() {
    return (
      <div>
        <h1>
        {this.state.Element1} {this.state.Element2}</h1>
        <button onClick={this.Handler} >Click </button>
      </div>
    )
  }
}

export default SetState


