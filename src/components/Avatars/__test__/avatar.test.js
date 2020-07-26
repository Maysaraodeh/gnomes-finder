import React from 'react';
import Avatar from '../Avatar';
import { render } from '@testing-library/react';
import { stubConsoleError } from '../../../helpers/testUtils';
import sinon from 'sinon';
import { gnomeAvatar } from './data';

stubConsoleError();

test('should render Avatar component with no errors', () => {
  const { getByText, getByTestId } = render(<Avatar {...gnomeAvatar} />);
  expect(getByTestId('avatar').classList.contains('tooltip')).toBe(true);
  expect(getByText(/Gnome/i)).toBeInTheDocument();
  expect(getByTestId('avatar-name')).toHaveTextContent('Gnome');
  expect(getByTestId('avatar-icons')).toBeInTheDocument();
  expect(getByTestId('avatar-professions')).toBeInTheDocument();
  sinon.assert.notCalled(console.error);
});

it('should produce missing props error', () => {
  render(<Avatar thumbnail="http://test.com" />);
  sinon.assert.called(console.error);
});
