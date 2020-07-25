import React from 'react';
import { CardSkeleton } from '.';

export default () => {
  return (
    <>
      {Array(10)
        .fill()
        .map((_, index) => (
          <CardSkeleton key={index} />
        ))}
    </>
  );
};
