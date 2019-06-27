import React from 'react';
import styled from 'styled-components';

import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';

import Tooltip from '../components/Tooltip';
import animationNote from './notes/tooltipAnimation.md';

const Wrapper = styled.div`
  margin: 200px 0;
  text-align: center;
`;

const Complex = styled.div`
  align-items: center;
  display: flex;
  max-width: 300px;
  padding: 8px;
  text-align: left;

  img {
    margin-right: 16px;
    width: 100px;
  }

  p {
    line-height: 1.5;
  }
`;

const options = {
  Bottom: 'bottom',
  'Bottom Left': 'bottom-left',
  'Bottom Right': 'bottom-right',
  Left: 'left',
  Right: 'right',
  Top: 'top',
  'Top Left': 'top-left',
  'Top Right': 'top-right'
};

const stories = storiesOf('Tooltip', module);
stories.addDecorator(withKnobs);

stories.add(
  'simple',
  () => (
    <Wrapper>
      <Tooltip
        position={select(
          'Tooltip location (relative to icon)',
          options,
          'top',
          'simple-option'
        )}
      >
        <span>This is a simple example of a tooltip!</span>
      </Tooltip>
    </Wrapper>
  ),
  {
    notes: { markdown: animationNote }
  }
);

stories.add('complex', () => (
  <Wrapper>
    <Tooltip
      position={select(
        'Tooltip location (relative to icon)',
        options,
        'right',
        'complex-option'
      )}
    >
      <Complex>
        <img
          src="https://vivintsolarcdn.com/home/img/vivint.solar.logo.svg"
          alt="Vivint Solar Logo"
          className="logo"
          height="25"
        />
        <div className="text">
          <h3>More Complex</h3>
          <p>
            You can add <i>any</i> component your ❤️ desires!
          </p>
        </div>
      </Complex>
    </Tooltip>
  </Wrapper>
));
