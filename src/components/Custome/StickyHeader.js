import React from 'react';
import './style.css';
export default ({ children }) => {
  window.onscroll = () => {
    stickIt();
  };
  const header = document.getElementById('stickyHeader');
  const sticky = 100;

  const stickIt = () => {
    if (window.pageYOffset > sticky) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
  };
  return (
    <div className="header" id="stickyHeader">
      {children}
    </div>
  );
};
