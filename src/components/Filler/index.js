import React from 'react';
import PropTypes from 'prop-types';

const Filler = (props) => {
  const { percentage } = props;
  return (
    <div className="filler" style={{ width: `${percentage}%` }}>
      <span className={`filler__percentage ${percentage > 0 ? 'text-white' : ''}`}>
        {percentage}
        %
      </span>
    </div>
  );
};

Filler.propTypes = {
  percentage: PropTypes.number.isRequired,
};
export default Filler;
