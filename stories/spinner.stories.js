import React from 'react';

import { storiesOf } from '@storybook/react';

import Sun from '../components/Spinners/Sun';
import sunNotes from './notes/sunSpinnerAnimation.md';

const stories = storiesOf('Spinners', module);
stories.add('Sun', () => <Sun isOpen />, { notes: { markdown: sunNotes } });
