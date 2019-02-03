import React from 'react';
import PropTypes from 'prop-types';
import TextArea from '../TextArea';
import Dropdown from '../Dropdown';
import RadioGroup from '../RadioGroup';

const Answer = ({
  type, value, placeholder, options, handleUpdatingAnswer,
}) => {
  const renderAnswer = () => {
    switch (type) {
      case 'dropdown':
        return (
          <Dropdown options={options} value={value} onChange={e => handleUpdatingAnswer(e.target.value)} />
        );

      case 'radioButton':
        return (
          <RadioGroup name="productSurvey" selectedValue={value} value={value} options={options} onClick={e => handleUpdatingAnswer(e)} />
        );

      case 'text':
        return (
          <TextArea value={value} placeholder={placeholder} onChange={handleUpdatingAnswer} />
        );
      default:
        return '';
    }
  };

  return (
    <div className="answer-container">
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
