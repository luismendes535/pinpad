import React from "react";
import PropTypes from "prop-types";
import "./Display.css";

interface DisplayProps {
  pin: string,
  message: string | null
}

const Display = ({ pin, message } : DisplayProps) => {
  const renderContent = () =>
    message ? message : pin.split('').map((nr, i) => (i + 1 === pin.length ? nr : "*"));

  return <div className="Display">{renderContent()}</div>;
};

Display.propTypes = {
  pin: PropTypes.string
};

export default Display;
