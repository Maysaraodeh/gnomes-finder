import React from 'react';
import Skeleton from 'react-loading-skeleton';
import './style.css';

const CardSkeleton = () => {
  return (
    <div data-testid="cardSkeleton" className="card scale-up-center">
      <article>
        <figure>
          <Skeleton circle={true} height={120} width={120} />
        </figure>

        <div>
          <Skeleton width={`90%`} />
          <div data-testid="cardSkeleton-icons" className="icons-container">
            <div>
              <Skeleton circle={true} height={50} width={50} />
              <Skeleton height={20} width={`80%`} />
            </div>
            <div>
              <Skeleton circle={true} height={50} width={50} />
              <Skeleton height={20} width={`80%`} />
            </div>
            <div>
              <Skeleton circle={true} height={50} width={50} />
              <Skeleton height={20} width={`80%`} />
            </div>
          </div>
          <div>
            <Skeleton height={36} width={`30%`} style={{ margin: 8 }} />
            <Skeleton height={36} width={`40%`} />
            <Skeleton height={36} width={`50%`} style={{ margin: 8 }} />
            <Skeleton height={36} width={`30%`} />
          </div>
        </div>
      </article>
    </div>
  );
};
export default CardSkeleton;
