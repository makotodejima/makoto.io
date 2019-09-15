import * as React from 'react';
import * as renderer from 'react-test-renderer';

import Logo from './Logo';

describe('Header', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Logo />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
