import React, { useState, useCallback } from 'react';
import { Card } from 'components/Cards';
import { CardsSkeleton } from 'components/Skeletons';
import { useGnomes } from './helpers';
import { SearchInput } from 'components/Inputs';
import { NetworkError } from 'components/Errors';
import { EmptyData } from 'components/Errors';
import './style.css';
import { StickyHeader } from 'components/Custome';
import Navbar from 'components/Navbar';

export default (props) => {
  const [pageNumber, setPageNumber] = useState(1);
  const {
    gnomesChunk = [],
    loading,
    error,
    gnomes,
    hasMore,
    onSearch,
  } = useGnomes({
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
    <div className="error-container">
      <NetworkError />
      <h4>{error.message}</h4>
    </div>
  ) : gnomesChunk.length === 0 ? (
    <EmptyData />
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
      <StickyHeader>
        <Navbar />
        <SearchInput onSearch={onSearch} error={error} />
      </StickyHeader>
      <div id="content" className="home-container">
        <div className="cards-container">{itemsList}</div>
      </div>
    </div>
  );
};
