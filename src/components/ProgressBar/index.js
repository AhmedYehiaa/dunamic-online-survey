import React from 'react';
import PropTypes from 'prop-types';

import Filler from '../Filler';

const ProgressBar = (props) => {
  const { percentage } = props;

  return (
    <div className="progress-bar">
      <Filler percentage={percentage} />
    </div>
  );
};

ProgressBar.propTypes = {
  percentage: PropTypes.number.isRequired,
};
export default ProgressBar;
