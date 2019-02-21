import React from "react";
import PropTypes from "prop-types";
import "./Display.css";

const Display = ({pin, message}) => {

  const renderContent = ()=>{
    if(!message){
      return pin.map((nr, i) => {
        if (i + 1 === pin.length) return nr;
        return "*";
      })
    }
    return message;
  }

  return (
    <div className="Display">
      {renderContent()}
    </div>
  );
}

Display.propTypes = {
  pin: PropTypes.number
};

export default Display;
