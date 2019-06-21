import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import Hamburger from '../components/Icons/Hamburger';
import hamburgerNotes from './notes/hamburgerAnimation.md';

const stories = storiesOf('Icons', module);
stories.addDecorator(withKnobs);
stories.add(
  'Hamburger',
  () => <Hamburger open={boolean('Menu is open?', false)} />,
  { notes: { markdown: hamburgerNotes } }
);
