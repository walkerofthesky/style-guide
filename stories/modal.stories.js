import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import Button from '../components/Button';
import Modal from '../components/Modal';

const stories = storiesOf('Modal', module);
stories.addDecorator(withKnobs);
stories.add('basic', () => (
  <Modal isOpen={boolean('Open', true)}>
    <h2>A Plan</h2>
    <p style={{ marginBottom: 24 }}>
      All right, kid. But you'd better be right about this. All right. What's
      your plan? Uh...Threepio, hand me those binders there will you? Okay. Now,
      I'm going to put these on you. Okay. Han, you put these on. Don't worry,
      Chewie. I think I know what he has in mind. Master Luke, sir! Pardon me
      for asking...but, ah...what should Artoo and I do if we're discovered
      here? Lock the door! And hope they don't have blasters. That isn't very
      reassuring.
    </p>
    <Button>Lock the Doors</Button>
  </Modal>
));
