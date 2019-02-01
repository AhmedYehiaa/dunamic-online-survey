import React, { Component } from 'react';

class SurveyForm extends Component {
  state = {
    answer: '',
  }

  render() {
    const { answer } = this.state;
    return (
      <div>
        Hello Question 1:
        {' '}
        {answer}
      </div>
    );
  }
}

export default SurveyForm;
