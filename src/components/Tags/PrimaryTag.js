import React from 'react';
import './style.css';
import PropTypes from 'prop-types';

const PrimaryTag = ({ profession }) => {
  return (
    <span data-testid="primary-tag" className="profession-tag">
      {profession}
    </span>
  );
};

PrimaryTag.propTypes = {
  profession: PropTypes.string.isRequired,
};

export default PrimaryTag;
