import React from 'react';
import PropTypes from 'prop-types';

const LandingPage = (props) => {
  const handleTakeSurevey = () => {
    props.history.push('/survey');
  };

  return (
    <div className="landing-page">
      <h1 className="landing-page-header">product satisfaction survey</h1>
      <button
        type="button"
        className="button--large"
        onClick={() => handleTakeSurevey()}
      >
          Take the Surevy
      </button>
      <p className="landing-page-message">
          We realize how precious your time is.
          That’s why we made sure this survey will only take a quick
        <span> 30 </span>
          seconds
      </p>
    </div>
  );
};

LandingPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default LandingPage;
