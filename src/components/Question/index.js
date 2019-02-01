import React from 'react';
import PropTypes from 'prop-types';

const Question = ({ text }) => (
  <h1 className="question">{text}</h1>
);

Question.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Question;
