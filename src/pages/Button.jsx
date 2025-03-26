// Button.jsx
import React from "react";
import PropTypes from "prop-types";
import './Button.css';


const Button = ({ children, onClick, variant = "primary", type = "button" }) => {
  return (
    <button
      className={`button button-${variant}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(["primary", "secondary", "danger"]),
  type: PropTypes.oneOf(["button", "submit", "reset"]),
};

export default Button;