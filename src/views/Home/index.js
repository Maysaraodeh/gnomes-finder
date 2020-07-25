import React, { useState, useCallback } from 'react';
import { Card } from 'components/Cards';
import { CardsSkeleton } from 'components/Skeletons';
import Navbar from 'components/Navbar';
import { useGnomes } from './helpers';
import './style.css';

export default (props) => {
  const [pageNumber, setPageNumber] = useState(1);
  const { gnomesChunk = [], loading, error, gnomes, hasMore } = useGnomes({
    pageNumber,
  });

  const observer = React.createRef();
  const lastGnomeRef = useCallback(
    (node) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((previous) => previous + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    /*eslint-disable-next-line*/
    [hasMore]
  );

  const itemsList = loading ? (
    <CardsSkeleton />
  ) : error ? (
    <div>
      <h4>{error.message}</h4>
    </div>
  ) : gnomesChunk.length === 0 ? (
    <h4> no data found</h4>
  ) : (
    gnomesChunk.map((d, index) => {
      if (gnomesChunk.length === index + 1)
        return (
          <div key={index} ref={lastGnomeRef}>
            <Card {...d} {...props} key={index} gnomes={gnomes} />
          </div>
        );
      return <Card {...d} {...props} key={index} gnomes={gnomes} />;
    })
  );

  return (
    <div>
      <Navbar />
      <div className="home-container">
        <div className="container">
          <div className="cards-container">{itemsList}</div>
        </div>
      </div>
    </div>
  );
};
