import React from 'react';
import PropTypes from 'prop-types';

const TextArea = ({ value, onChange }) => (
  <textarea
    className="text-area"
    value={value}
    onChange={onChange}
  />
);

TextArea.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

TextArea.defaultProps = {
  value: '',
};
export default TextArea;
