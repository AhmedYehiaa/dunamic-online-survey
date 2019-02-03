import React from 'react';
import PropTypes from 'prop-types';


const RadioOption = ({
  name,
  value,
  defaultChecked,
  label,
  onClick,
}) => (
  <p className="radio-option">
    <input
      type="radio"
      name={name}
      id={value}
      defaultChecked={defaultChecked}
      onClick={() => onClick(value)}
    />
    <label htmlFor={value}>{label}</label>
  </p>
);

RadioOption.propTypes = {
  name: PropTypes.string.isRequired,
  defaultChecked: PropTypes.bool,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

RadioOption.defaultProps = {
  defaultChecked: false,
};

export default RadioOption;
