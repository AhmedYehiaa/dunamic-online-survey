import React from 'react';
import PropTypes from 'prop-types';
import RadioOption from '../RadioOption';

const RadioGroup = ({
  name, selectedValue, options, onClick,
}) => (
  <div className="radio-group">
    {options.map(option => (
      <RadioOption
        key={option.value}
        name={name}
        label={option.name}
        value={option.value}
        onClick={onClick}
        defaultChecked={selectedValue === option.value}
      />
    ))}
  </div>
);

RadioGroup.propTypes = {
  name: PropTypes.string.isRequired,
  selectedValue: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  })).isRequired,
  onClick: PropTypes.func.isRequired,
};

RadioGroup.defaultProps = {
  selectedValue: '',
};

export default RadioGroup;
