import React from 'react';
import './style.css';
export default ({ children }) => {
  window.onscroll = () => {
    stickIt();
  };
  const header = document.getElementById('stickyHeader');
  const content = document.getElementById('content');
  const logo = document.getElementById('logo');
  const sticky = 200;

  const stickIt = () => {
    if (window.pageYOffset > sticky) {
      header.classList.add('sticky');
      if (content) content.style.paddingTop = '190px';
      if (logo) logo.style.display = 'none';
    } else {
      header.classList.remove('sticky');
      if (content) content.style.paddingTop = '0px';
      if (logo) logo.style.display = 'block';
    }
  };
  return (
    <div className="header" id="stickyHeader">
      {children}
    </div>
  );
};
