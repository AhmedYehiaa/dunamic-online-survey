import React from 'react';
import PropTypes from 'prop-types';

const Dropdown = ({ options, selectValue, onChange }) => (
  <select onChange={onChange} value={selectValue}>
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
  selectValue: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

Dropdown.defaultProps = {
  selectValue: '',
};

export default Dropdown;
