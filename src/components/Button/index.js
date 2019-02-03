/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';

export const TYPES = {
  PRIMARY: 'btn-primary',
  WARNING: 'btn-warning',
  DANGER: 'btn-danger',
  SUCCESS: 'btn-success',
  BACK: 'btn-back',
  NEXT: 'btn-next',
};

export const SIZES = {
  SMALL: 'btn-small',
  MEDIUM: 'btn-medium',
  LARGE: 'btn-large',
};

const Button = ({
  type, text, disabled, buttonType, buttonSize, onClick,
}) => (
  <button
    type={type}
    className={`button ${buttonType} ${buttonSize}`}
    disabled={disabled}
    onClick={onClick}
  >
    {text}
  </button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  buttonType: PropTypes.string,
  buttonSize: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  buttonType: TYPES.PRIMARY,
  buttonSize: SIZES.MEDIUM,
  disabled: false,
};

export default Button;
