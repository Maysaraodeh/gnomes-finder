import React from 'react';
import Card from '../Card';
import { render } from '@testing-library/react';
import { gnome, gnomes } from './data';
import { stubConsoleError } from '../../../helpers/testUtils';
import sinon from 'sinon';

stubConsoleError();

it('should render card with provided props', () => {
  const { getByTestId } = render(<Card {...gnome} gnomes={gnomes} />);
  expect(getByTestId('card').classList.contains('card')).toBe(true);
  expect(getByTestId('card').classList.contains('fade-in')).toBe(true);
  expect(getByTestId('card-name')).toHaveTextContent('Gnome3');
  expect(getByTestId('card-professions')).toBeInTheDocument();
  expect(getByTestId('card-icons')).toBeInTheDocument();
  expect(getByTestId('card-avatars')).toBeInTheDocument();
});

it('should produce missing props error', () => {
  render(
    <Card thumbnail="http://test.com" gnomes={gnomes} friends={gnome.friends} />
  );
  sinon.assert.called(console.error);
});
