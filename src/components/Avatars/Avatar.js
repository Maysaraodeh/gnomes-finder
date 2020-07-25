import React from 'react';
import './style.css';
import { IconText } from 'components/Custome';
import { Tag } from 'components/Tags';
import PropTypes from 'prop-types';
const Avatar = ({
  thumbnail = '',
  weight = 0,
  age = 0,
  height = 0,
  name = '',
  professions = [],
  id,
}) => {
  return (
    <span key={id} data-testid="avatar" className="tooltip">
      <span className="avatar">
        <img data-testid="avatar-img" alt="avatar" src={thumbnail} />
      </span>
      <div className="top">
        <h1 data-testid="avatar-name">{name}</h1>
        <div data-testid="avatar-icons" className="icons-container">
          <IconText
            icon="weight.png"
            text={`${weight ? weight.toFixed(2) : weight}`}
          />
          <IconText icon="gnome.png" text={`${age}`} />
          <IconText
            icon="height.png"
            text={`${height ? height.toFixed(2) : height}`}
          />
        </div>
        {professions.length > 0 && (
          <div
            data-testid="avatar-professions"
            className="professions-container"
          >
            {professions.map((p, index) => (
              <Tag profession={p} key={index} />
            ))}
          </div>
        )}
      </div>
    </span>
  );
};

Avatar.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  weight: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  professions: PropTypes.array.isRequired,
};

export default Avatar;
