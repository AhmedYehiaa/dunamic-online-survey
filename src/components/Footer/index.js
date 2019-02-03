import React from 'react';
import PropTypes from 'prop-types';

import Button, { TYPES, SIZES } from '../Button';

const Footer = ({
  disableBackButton, disableNextButton, onClickBack, onClickNext,
}) => (
  <footer className="footer">
    <div className="button-back">
      <Button
        type="button"
        onClick={onClickBack}
        text="Back"
        disabled={disableBackButton}
        buttonType={TYPES.BACK}
        buttonSize={SIZES.MEDIUM}
      />
    </div>
    <div className="button-next">
      <Button
        type="button"
        onClick={onClickNext}
        text="Next"
        disabled={disableNextButton}
        buttonType={TYPES.PRIMARY}
        buttonSize={SIZES.MEDIUM}
      />
    </div>
  </footer>
);

Footer.propTypes = {
  disableBackButton: PropTypes.bool,
  disableNextButton: PropTypes.bool,
  onClickBack: PropTypes.func.isRequired,
  onClickNext: PropTypes.func.isRequired,
};

Footer.defaultProps = {
  disableBackButton: false,
  disableNextButton: false,
};

export default Footer;
