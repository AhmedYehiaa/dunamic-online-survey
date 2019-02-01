import React from 'react';
import PropTypes from 'prop-types';

const TextArea = ({ value, placeholder, onChange }) => (
  <textarea
    className="text-area"
    value={value}
    placeholder={placeholder}
    onChange={e => onChange(e.target.value)}
  />
);

TextArea.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

TextArea.defaultProps = {
  value: '',
  placeholder: '',
};
export default TextArea;
