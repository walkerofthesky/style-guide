import React from 'react';

import { storiesOf } from '@storybook/react';

import Gallery from '../components/Gallery';
import animationNote from './notes/galleryAnimation.md';

const stories = storiesOf('Gallery', module);
stories.add('sliding', () => <Gallery />, {
  notes: { markdown: animationNote }
});
