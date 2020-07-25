import React from 'react';
import PrimaryTag from '../PrimaryTag';
import { render } from '@testing-library/react';
import { stubConsoleError } from '../../../helpers/testUtils';
import sinon from 'sinon';

stubConsoleError();

it('should render primary tag', () => {
  const { getByTestId } = render(<PrimaryTag profession="Metalworker" />);
  expect(getByTestId('primary-tag').classList.contains('profession-tag')).toBe(
    true
  );
  expect(getByTestId('primary-tag')).toHaveTextContent('Metalworker');
  sinon.assert.notCalled(console.error);
});

it('should produce missing props error', () => {
  render(<PrimaryTag />);
  sinon.assert.called(console.error);
});
