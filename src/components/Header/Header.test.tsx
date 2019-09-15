import * as React from 'react';
import Header from './Header';
import { render, fireEvent, cleanup } from '@testing-library/react';

afterEach(cleanup);

test('<Header />', () => {
  const { getByTestId, queryByTestId, debug } = render(<Header />);
  const hamburgerMenu = getByTestId('hamburger-menu');

  expect(hamburgerMenu.innerHTML).toContain('Hamburger');
  expect(queryByTestId('close')).toBeNull();
  expect(queryByTestId('hamburger')).toBeTruthy();

  fireEvent.click(hamburgerMenu);

  expect(hamburgerMenu.innerHTML).toContain('Close');
  expect(queryByTestId('hamburger')).toBeNull();
  expect(queryByTestId('close')).toBeTruthy();

  fireEvent.click(hamburgerMenu);

  expect(hamburgerMenu.innerHTML).toContain('Hamburger');
});
