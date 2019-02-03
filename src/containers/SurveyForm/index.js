/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/sort-comp */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Question from '../../components/Question';
import ProgressBar from '../../components/ProgressBar';
import Answer from '../../components/Answer';
import Footer from '../../components/Footer';
import questionsSchema from '../../services/questionsSchema';

class SurveyForm extends Component {
  state = {
    questions: JSON.parse(localStorage.getItem('schema')) || questionsSchema.questions,
    answer: '',
  };

  componentWillMount() {
    const { questions } = this.state;
    // Get question's index from URL
    const index = Number(this.props.match.params.id);
    const unAnsweredQuestion = questions.findIndex(q => q.answer === '');

    if (isNaN(index) || !questions[index - 1]) {
      this.props.history.push('/not-found');
    } else if (unAnsweredQuestion + 1 < index && unAnsweredQuestion !== -1) {
      this.props.history.push(`${unAnsweredQuestion + 1}`);
    } else {
      const { answer } = this.getCurrentQuestion();
      this.updateAnswer(answer);
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      const { answer } = this.getCurrentQuestion();
      this.updateAnswer(answer);
    }
  }

  updateAnswer(answer) {
    this.setState({ answer });
  }

  getNumberOfAnswers() {
    const { questions } = this.state;
    const count = questions.reduce((n, question) => n + (question.answer !== ''), 0);
    return count;
  }

  getCurrentQuestion() {
    const question = this.state.questions[Number(this.props.match.params.id) - 1];
    return question;
  }

  submit(questionId) {
    const { questions, answer } = this.state;
    const updatedQuestions = [...questions];
    const index = updatedQuestions.findIndex(question => question.id === questionId);
    updatedQuestions[index].answer = answer.trim();
    this.setState({ questions: updatedQuestions });
    localStorage.setItem('schema', JSON.stringify(questions));

    const countAnsweredQuestions = this.getNumberOfAnswers();
    if (countAnsweredQuestions !== questions.length) {
      this.props.history.push(`/surveyForm/${Number(this.props.match.params.id) + 1}`);
    } else {
      this.props.history.push('/summary');
    }
  }

  handleBackNavigation = () => {
    const currentQuestionId = Number(this.props.match.params.id);
    this.props.history.push(`${currentQuestionId - 1}`);
  }

  render() {
    const { answer, questions } = this.state;
    const currentQuestion = this.getCurrentQuestion();
    const count = this.getNumberOfAnswers();
    const currentQuestionId = +this.props.match.params.id;

    return (
      <div className="survey-Container">
        <ProgressBar
          percentage={(count / questions.length) * 100}
        />
        <div className="survey-form">
          <Question
            text={currentQuestion && currentQuestion.name}
          />
          <Answer
            type={currentQuestion && currentQuestion.properties.type}
            value={answer}
            options={currentQuestion && currentQuestion.properties.options}
            placeholder={currentQuestion && currentQuestion.properties.placeholder}
            handleUpdatingAnswer={value => this.updateAnswer(value)}
          />
          <Footer
            disableBackButton={currentQuestionId === 1}
            disableNextButton={answer.trim().length === 0}
            onClickBack={() => this.handleBackNavigation()}
            onClickNext={() => this.submit(currentQuestion && currentQuestion.id)}
          />
        </div>
      </div>
    );
  }
}

SurveyForm.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }).isRequired,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default SurveyForm;
