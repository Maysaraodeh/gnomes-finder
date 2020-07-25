import React from 'react';
import { render } from '@testing-library/react';
import { SearchInput } from 'components/Inputs';
import { stubConsoleError } from '../../../helpers/testUtils';
import sinon from 'sinon';

stubConsoleError();
const componentProps = {
  onSearch: () => {},
};

it('should render Search Input component', () => {
  const { getByTestId } = render(<SearchInput {...componentProps} />);
  expect(
    getByTestId('searchInput').classList.contains('search-container')
  ).toBe(true);

  expect(getByTestId('searchInput-input').classList.contains('search')).toBe(
    true
  );

  expect(
    getByTestId('searchInput-button').classList.contains('search-button')
  ).toBe(true);
  sinon.assert.notCalled(console.error);
});

it('should produce missing props error', () => {
  render(<SearchInput />);
  sinon.assert.called(console.error);
});
