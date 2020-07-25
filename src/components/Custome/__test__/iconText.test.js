import React from 'react';
import { render } from '@testing-library/react';
import { stubConsoleError } from '../../../helpers/testUtils';
import sinon from 'sinon';
import IconText from '../IconText';

stubConsoleError();

it('should render IconText component with no errors', () => {
  const { getByTestId } = render(<IconText icon="height.png" text="100" />);
  expect(getByTestId('iconText').classList.contains('img-text-container')).toBe(
    true
  );
  expect(getByTestId('iconText-text')).toHaveTextContent('100');
  expect(getByTestId('iconText-img').src).toEqual(
    `http://localhost/height.png`
  );
  sinon.assert.notCalled(console.error);
});

it('should produce missing props error', () => {
  render(<IconText />);
  sinon.assert.called(console.error);
});
