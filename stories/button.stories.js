import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import Button from '../components/Button';
import attentionNote from './notes/buttonAttentionAnimation.md';

const stories = storiesOf('Button', module);
stories.addDecorator(withKnobs);
stories.add(
  'get attention',
  () => (
    <Button
      brand
      attention={boolean('Get attention?', false)}
      onClick={action('clicked')}
    >
      😎 Button
    </Button>
  ),
  {
    notes: { markdown: attentionNote }
  }
);
