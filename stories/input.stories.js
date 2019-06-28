import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import Input from '../components/Input';
import animationNotes from './notes/inputAnimation.md';

const stories = storiesOf('Input', module);
stories.addDecorator(withKnobs);
stories.add(
  'with error',
  () => (
    <Input
      id="name"
      label="Name"
      error={boolean('Has error?', true) ? 'Required field' : ''}
    />
  ),
  {
    notes: { markdown: animationNotes }
  }
);
