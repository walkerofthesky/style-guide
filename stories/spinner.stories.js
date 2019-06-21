import React from 'react';

import { storiesOf } from '@storybook/react';

import Sun from '../components/Spinners/Sun';

const stories = storiesOf('Spinners', module);
stories.add('Sun', () => <Sun isOpen />);
