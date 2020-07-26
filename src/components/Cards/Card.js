import React from 'react';
import PropTypes from 'prop-types';
import { Tag } from '../Tags';
import './style.css';
import { IconText } from 'components/Custome';
import { Avatars } from 'components/Avatars';
import { findGnomeFriends } from 'views/Home/helpers/utils';
import Img from 'react-cool-img';

const Card = ({
  id,
  name,
  age,
  thumbnail,
  professions = [],
  weight,
  height,
  gnomes = [],
  friends = [],
}) => {
  const friendsData = findGnomeFriends(friends, gnomes);
  return (
    <div key={id} data-testid="card" className="card fade-in">
      <article>
        <figure>
          <Img
            placeholder={require('assets/img/icons/gnome.png')}
            src={thumbnail.replace('http', 'https')} // to load images over secured https protocol.
            error={require('assets/img/icons/no-icon.png')}
            alt="avatar"
          />
        </figure>
        <div>
          <h1 data-testid="card-name">{name}</h1>
          <div data-testid="card-icons" className="icons-container">
            <IconText
              icon="weight.png"
              text={`${weight ? weight.toFixed(2) : weight}`}
            />
            <IconText icon="gnome.png" text={`${age}`} />
            <IconText
              icon="height.png"
              text={`${height ? height.toFixed(2) : ''}`}
            />
          </div>
        </div>
        <div data-testid="card-professions" className="professions-container">
          {professions.map((p, index) => (
            <Tag profession={p} key={index} />
          ))}
        </div>
        <div data-testid="card-avatars" className="avatars-container">
          <Avatars avatars={friendsData} />
        </div>
      </article>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  weight: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
  professions: PropTypes.array.isRequired,
  friends: PropTypes.array.isRequired,
  gnomes: PropTypes.array.isRequired,
};

export default Card;
