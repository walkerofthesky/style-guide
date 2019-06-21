import React from 'react';
import PropTypes from 'prop-types';
import { StyledSunSpinner, Sun, Text, Ray } from '../styles/Sun.styles';

const SunSpinner = ({ isOpen }) => {
  return (
    <StyledSunSpinner isOpen={isOpen}>
      <div className="sun-loader__icon">
        <Sun>
          {Array(8)
            .fill(null)
            .map((el, idx) => (
              <Ray idx={idx} key={idx} />
            ))}
        </Sun>
      </div>
      <Text>
        <p>Exciting electrons...</p>
      </Text>
    </StyledSunSpinner>
  );
};

SunSpinner.propTypes = {
  isOpen: PropTypes.bool.isRequired
};

export default SunSpinner;
