import React from 'react';
import { render } from '@testing-library/react';
import { stubConsoleError } from '../../../helpers/testUtils';
import sinon from 'sinon';
import { CardSkeleton } from '../';

stubConsoleError();

it('should render CardSkeleton with no errors', () => {
  const { getByTestId } = render(<CardSkeleton />);
  expect(getByTestId('cardSkeleton').classList.contains('card')).toBe(true);
  expect(
    getByTestId('cardSkeleton').classList.contains('scale-up-center')
  ).toBe(true);
  expect(getByTestId('cardSkeleton-icons')).toBeInTheDocument();

  sinon.assert.notCalled(console.error);
});
