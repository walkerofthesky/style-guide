import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';

import Gallery from '../components/Gallery';
import animationNote from './notes/galleryAnimation.md';

const stories = storiesOf('Gallery', module);
stories.addDecorator(withKnobs);
stories.add('sliding', () => <Gallery />, {
  notes: { markdown: animationNote }
});
