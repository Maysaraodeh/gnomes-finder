import React from 'react';
import Avatar from './Avatar';
import PropTypes from 'prop-types';

import './style.css';
const Avatars = ({ avatars = [] }) => {
  return (
    <div className="avatars">
      {avatars.map((av) => (
        <Avatar {...av} key={av.id} />
      ))}
    </div>
  );
};

Avatar.propTypes = {
  avatars: PropTypes.array,
};

export default Avatars;
