import React from 'react';
import PropTypes from 'prop-types';
import Button, { TYPES, SIZES } from '../../components/Button';

const LandingPage = (props) => {
  const handleTakeSurevey = () => {
    props.history.push('/surveyForm');
  };

  return (
    <div className="landing-page">
      <h1 className="landing-page-header">product satisfaction survey</h1>
      <Button
        type="button"
        text="Take the Surevy"
        disabled={false}
        buttonType={TYPES.PRIMARY}
        buttonSize={SIZES.LARGE}
        onClick={() => handleTakeSurevey()}
      />
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
