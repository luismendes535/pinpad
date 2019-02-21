import React, { Component } from "react";
import PropTypes from "prop-types";
import "./PinPad.css";

import Display from "../../components/Display/Display";
import Pad from "../../components/Pad/Pad";

export default class PinPad extends Component {
  state = {
    correctPin:[1,2,3,4],
    currentPin: [],
    failedAttempts:0,
    message: null
  };

  onClickButton = async (btn)=>{
    await this.setState({
      currentPin: [...this.state.currentPin, btn], message:null
    })
      if(this.state.currentPin.length > 3){
        if(JSON.stringify(this.state.correctPin) === JSON.stringify(this.state.currentPin)){
          this.setState({message: 'OK', currentPin:[]})
        }else if(this.state.failedAttempts === 2) {
          this.setState({message: 'LOCKED', failedAttempts: 0, currentPin:[]})
          setTimeout(()=>{
            this.setState({message: null})
          }, 30000)
        }else{
          this.setState({message: 'ERROR', failedAttempts: this.state.failedAttempts + 1, currentPin:[]})
        }
      }
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
