import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
  align-items: center;
  display: flex;

  .label {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    margin-right: 12px;
  }

  .warning {
    svg {
      fill: #c6392f;
    }
  }

  input {
    border: ${props => (props.error ? '1px solid #c6392f' : '1px solid #aaa')};
    border-radius: 4px;
    box-shadow: ${props => (props.error ? '0 0 7px -2px #c6392f' : 'none')};
    font-size: 16px;
    margin-right: 8px;
    padding: 8px;
    transition: all 250ms cubic-bezier(0.54, 1.18, 0.52, 1);
  }
`;

import Tooltip from './Tooltip';
import WarningIcon from './Icons/Warning';

const Input = ({ id, label, error }) => (
  <Label error={Boolean(error)} htmlFor={id}>
    <span className="label">{label}</span>
    <input type="text" id={id} />
    {error && (
      <Tooltip className="warning" icon={<WarningIcon />} position="right">
        {error}
      </Tooltip>
    )}
  </Label>
);

export default Input;
