import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
const Card = ({ id, name, age, thumbnail, professions, weight, height }) => {
  return (
    <div key={id} data-testid="card" className="card scale-up-center">
      <article>
        <figure>
          <img data-testid="card-img" alt="avatar" src={thumbnail} />
        </figure>
        <div>
          <h1 data-testid="card-name">{name}</h1>
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
};

export default Card;
