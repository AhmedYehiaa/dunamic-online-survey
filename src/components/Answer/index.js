import React from 'react';
import PropTypes from 'prop-types';
import TextArea from '../TextArea';
import Dropdown from '../Dropdown';

const Answer = ({
  type, value, placeholder, options, handleUpdatingAnswer,
}) => {
  const renderAnswer = () => {
    if (type === 'text') {
      return (
        <TextArea value={value} placeholder={placeholder} onChange={handleUpdatingAnswer} />
      );
    }
    return (
      <Dropdown options={options} value={value} onChange={handleUpdatingAnswer} />
    );
  };

  return (
    <div className="Answer-container">
      {renderAnswer()}
    </div>
  );
};


Answer.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  })),
  handleUpdatingAnswer: PropTypes.func.isRequired,
};

Answer.defaultProps = {
  value: '',
  placeholder: '',
  options: [{
    name: '',
    value: '',
  }],
};

export default Answer;
