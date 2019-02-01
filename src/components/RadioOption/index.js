import React from 'react';
import PropTypes from 'prop-types';


const RadioOption = ({
  name,
  value,
  label,
  handleInputChange,
}) => (
  <p className="radio-option">
    <input type="radio" id={value} name={name} onClick={() => handleInputChange(value)} />
    <label htmlFor={value}>{label}</label>
  </p>
);

RadioOption.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
};

export default RadioOption;
