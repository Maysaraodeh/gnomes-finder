import sinon from 'sinon';

export const stubConsoleError = () => {
  beforeEach(() => {
    sinon.stub(console, 'error');
  });

  afterEach(() => {
    console.error.restore();
  });
};
