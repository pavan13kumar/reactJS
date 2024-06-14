//THE PROCESS IS TO CALL THE PARENT METHOD FROM THE  CHILD COMPONENT [METHODS AS PROPS]

import React, { Component } from 'react'
import ChildComp from './ChildComp'
class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         ParentName:"Parent"
      }
      this.greetParent=this.greetParent.bind(this);
    }

    greetParent(Childpara){
        alert(`Hello ${this.state.ParentName}`)
    }

    // ACCEPTING THE PARAMETER FROM THE CHILD COMPONENT
    // greetParent(Childpara){
    //     alert(`Hello ${this.state.ParentName} from ${Childpara}`)
    // }
    
  render() {
    return (
      <div>
        {/* <h1>{this.state.ParentName}</h1>
        <button onClick={this.greetParent.bind(this)}>greet parent </button> */}

        
        <ChildComp greetHandler= {this.greetParent}/>
      </div>
    )
  }
}

export default ParentComp
