import React from 'react';
import Lottie from 'react-lottie';
import * as networkError from './lottieFiles/NetworkError.json';
import * as emptyData from './lottieFiles/EmptyData.json';

const defaultOptions = {
  loop: false,
  autoplay: true,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const NetworkError = () => {
  return (
    <div>
      <Lottie
        options={{ ...defaultOptions, animationData: networkError.default }}
        height={400}
        width={400}
      />
    </div>
  );
};

const EmptyData = () => {
  return (
    <div>
      <Lottie
        options={{ ...defaultOptions, animationData: emptyData.default }}
        height={400}
        width={400}
      />
    </div>
  );
};

export { default as ErrorBoundary } from './ErrorBoundary';
export { NetworkError, EmptyData };
