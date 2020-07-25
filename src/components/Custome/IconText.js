import React from 'react';
import './style.css';
import PropTypes from 'prop-types';
const IconText = ({ icon = 'no-icon.png', text }) => {
  return (
    <div data-testid="iconText" className="img-text-container">
      <img
        data-testid="iconText-img"
        alt="icon"
        className="image-text"
        src={require(`assets/img/icons/${icon}`)}
      />
      <h4 data-testid="iconText-text">{text}</h4>
    </div>
  );
};

IconText.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default IconText;
