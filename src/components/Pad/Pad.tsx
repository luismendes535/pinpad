import React from "react";
import PropTypes from 'prop-types'
import "./Pad.css";

let buttons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'DEL', 0 ,'OK'];

interface PadProps {
  clicked: Function,
  isLocked: boolean
}

const Pad = ({ clicked, isLocked }: PadProps) => {
  return (
    <div className="Pad">
      {buttons.map((btn, id) => (
        <button
          key={id}
          disabled={isLocked}
          className="Button"
          onClick={() => clicked(btn)}
        >
          {btn}
        </button>
      ))}
    </div>
  );
};

Pad.propTypes = {
  clicked: PropTypes.func,
  isLocked: PropTypes.bool
}

export default Pad;
