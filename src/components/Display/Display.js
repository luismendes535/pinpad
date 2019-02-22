import React from "react";
import PropTypes from "prop-types";
import "./Display.css";

const Display = ({ pin, message }) => {

  const renderContent = () =>
    message ? message : pin.map((nr, i) => (i + 1 === pin.length ? nr : "*"));

  return <div className="Display">{renderContent()}</div>;
};

Display.propTypes = {
  pin: PropTypes.array
};

export default Display;
