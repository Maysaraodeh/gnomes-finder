import React from 'react';
import './style.css';
export default () => {
  return (
    <nav>
      <img
        alt="logo"
        className="logo"
        src={require('assets/img/icons/logo.svg')}
      />
    </nav>
  );
};
