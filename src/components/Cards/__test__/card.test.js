import React from 'react';
import Card from '../Card';
import { render } from '@testing-library/react';
import { gnome, gnomes } from './data';
import { stubConsoleError } from '../../../helpers/testUtils';
import sinon from 'sinon';

stubConsoleError();

it('should render card with provided props', () => {
  const { getByTestId } = render(<Card {...gnome} gnomes={gnomes}></Card>);
  expect(getByTestId('card').classList.contains('card')).toBe(true);
  expect(getByTestId('card').classList.contains('scale-up-center')).toBe(true);
  expect(getByTestId('card-name')).toHaveTextContent('Gnome3');
  expect(getByTestId('card-img').src).toEqual('https://imageurl.com/');
  sinon.assert.notCalled(console.error);
});

it('should produce missing props error', () => {
  render(<Card />);
  sinon.assert.called(console.error);
});
