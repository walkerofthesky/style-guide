import React from 'react';

import { storiesOf } from '@storybook/react';

import Header from '../components/Header';
import animationNote from './notes/headerAnimation.md';

const stories = storiesOf('Header', module);
stories.add('navigation', () => <Header />, {
  notes: { markdown: animationNote }
});
