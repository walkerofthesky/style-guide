import React from 'react';

import { storiesOf } from '@storybook/react';

import Hamburger from '../components/Icons/Hamburger';
import hamburgerNotes from './notes/hamburgerAnimation.md';

const stories = storiesOf('Icons', module);
stories.add('Hamburger', () => <Hamburger />, {
  notes: { markdown: hamburgerNotes }
});
