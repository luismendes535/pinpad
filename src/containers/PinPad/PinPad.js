import React, { Component } from "react";
import "./PinPad.css";

import Display from "../../components/Display/Display";
import Pad from "../../components/Pad/Pad";

class PinPad extends Component {
  state = {
    correctPin:[1,2,3,4],
    currentPin: [],
    failedAttempts:0,
    message: null
    
  };

  handleInputChange = () => {
    const {currentPin, correctPin, failedAttempts} = this.state;

    if(currentPin.length > 3){
      // eslint-disable-next-line eqeqeq
      if(currentPin == correctPin){
        this.setState({message: 'OK', currentPin:[]})
      } else if (failedAttempts === 2) {
        this.setState({message: 'LOCKED', failedAttempts: 0, currentPin:[]})
        setTimeout(()=>{
          this.setState({message: null})
        }, 30000) //30000 ms = 30s
      } else {
        this.setState({message: 'ERROR', failedAttempts: failedAttempts + 1, currentPin:[]})
      }
    }
  }

  onClickButton = btn =>{
    this.setState({currentPin: [...this.state.currentPin, btn], message:null}, () => {
     this.handleInputChange()
    })
  }

  render() {
    const {currentPin, message} = this.state;
    return (
      <div className="PinPad">
        <Display pin={currentPin} message={message}/>
        <Pad clicked={this.onClickButton} isLocked={message==='LOCKED'}/>
      </div>
    );
  }
}

export default PinPad;
