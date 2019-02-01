
import React from 'react';
import PropTypes from 'prop-types';
import RadioOption from '../RadioOption';

const RadioGroup = ({ name, options, handleInputChange }) => (
  <div>
    {options.map(option => (
      <RadioOption
        key={option.value}
        name={name}
        label={option.name}
        value={option.value}
        handleInputChange={handleInputChange}
      />
    ))}
  </div>
);

RadioGroup.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  })).isRequired,
  handleInputChange: PropTypes.func.isRequired,
};

export default RadioGroup;
