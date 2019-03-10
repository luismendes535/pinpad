import React, { Component } from "react";
import "./PinPad.css";

import Display from "../../components/Display/Display";
import Pad from "../../components/Pad/Pad";

class PinPad extends Component {
  state = {
    correctPin:'',
    currentPin: '',
    failedAttempts:0,
    message: null,
  };

  componentDidMount(){
    fetch('https://pinpad.challenges.yld.io')
    .then(res=>res.json())
    .then(res=>{
      console.log(res);
      this.setState({correctPin:res.pin})
    })
  }

  handleInputChange = () => {
    const {currentPin, correctPin, failedAttempts} = this.state;
    
    if(currentPin.length > 3){
      if(currentPin === correctPin){
        this.setState({message: 'OK', currentPin:'', failedAttempts:0})
      } else if (failedAttempts === 2) {
        this.setState({message: 'LOCKED', failedAttempts: 0, currentPin:''})
        setTimeout(()=>{
          this.setState({message: null})
        }, 30000) //30000 ms = 30s
      } else {
        this.setState({message: 'ERROR', failedAttempts: failedAttempts + 1, currentPin:''})
      }
    }
  }
  
  onClickButton = (btn: String) =>{
    const {currentPin} = this.state;
    if( typeof btn === 'number' && currentPin.length <4){
      this.setState({currentPin: `${currentPin}${btn}`, message:null})
    }else if(btn === 'DEL'){
      this.setState({currentPin: currentPin.slice(0, currentPin.length-1)})
    }else if(btn === 'OK'){
        this.handleInputChange()
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

export default PinPad;
