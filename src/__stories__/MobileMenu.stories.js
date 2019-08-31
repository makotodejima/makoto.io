import React from 'react';
import { storiesOf } from '@storybook/react';

import MobileMenu from '../components/MobileMenu';

storiesOf('MobileMenu', module).add('Default', () => (
  <>
    <span>Mobile menu is shown when window width is under 796px</span>
    <MobileMenu />
  </>
));
