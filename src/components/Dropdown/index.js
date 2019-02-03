import React from 'react';
import PropTypes from 'prop-types';

const Dropdown = ({ options, value, onChange }) => (
  <select onChange={onChange} value={value}>
    <option value="">Please choose an option</option>
    {options.map(option => (
      <option key={option.value} value={option.value}>
        {option.name}
      </option>
    ))}
  </select>
);

Dropdown.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  })).isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

Dropdown.defaultProps = {
  value: '',
};

export default Dropdown;
