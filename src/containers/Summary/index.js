/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Summary extends Component {
  state = {
    questions: JSON.parse(localStorage.getItem('schema')),
  }

  componentWillMount() {
    if (!this.state.questions) {
      this.props.history.push('/survey');
    }
  }

  componentDidMount() {
    localStorage.removeItem('schema');
  }

  render() {
    const { questions } = this.state;
    return (
      <div className="summary-container">
        <h1>Thank you for your feedback</h1>
        <h2>Here are you answers</h2>
        {questions && questions.map(question => (
          <div className="question-container" key={question.answer}>
            <div className="question-name">
              {question.name}
            </div>
            <div className="question-answer">
              {question.answer}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

Summary.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Summary;
