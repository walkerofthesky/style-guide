import React, { useCallback, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash.debounce';

import Info from './Icons/Info';
import { StyledTooltip } from './styles/Tooltip.styles';

function updateCoords({ iconRect, tooltipRect, offset, setCoords, position }) {
  if (!iconRect || !tooltipRect) return;

  const centerOfIcon = {
    x: iconRect.x + iconRect.width / 2,
    y: iconRect.y + iconRect.height / 2
  };
  let tooltipLeft;
  let tooltipTop;

  // X values for above or below
  const left = iconRect.x + iconRect.width - tooltipRect.width + offset;
  const middle = centerOfIcon.x - tooltipRect.width / 2;
  const right = iconRect.x - offset;

  // Y values
  const bottom = iconRect.y + iconRect.height + offset;
  const center = centerOfIcon.y - tooltipRect.height / 2;
  const top = iconRect.y - tooltipRect.height - offset;

  switch (position) {
    case 'bottom':
      tooltipLeft = middle;
      tooltipTop = bottom;
      break;
    case 'bottom-left':
      tooltipLeft = left;
      tooltipTop = bottom;
      break;
    case 'bottom-right':
      tooltipLeft = right;
      tooltipTop = bottom;
      break;
    case 'left':
      tooltipLeft = iconRect.x - tooltipRect.width - offset;
      tooltipTop = center;
      break;
    case 'right':
      tooltipLeft = iconRect.x + iconRect.width + offset;
      tooltipTop = center;
      break;
    case 'top':
      tooltipLeft = middle;
      tooltipTop = top;
      break;
    case 'top-left':
      tooltipLeft = left;
      tooltipTop = top;
      break;
    case 'top-right':
      tooltipLeft = right;
      tooltipTop = top;
      break;
    default:
      return;
  }

  setCoords({ x: `${tooltipLeft}px`, y: `${tooltipTop}px` });
}

let iconRect;
let tooltipRect;
const Tooltip = ({ icon, position, children }) => {
  const [coords, setCoords] = useState({ x: 'unset', y: 'unset' });
  const [active, setActive] = useState(true); // default to true only for demo purposes
  const [windowSize, setWindowSize] = useState({});
  const offset = 8;

  const iconRef = useCallback(
    node => {
      if (node !== null) {
        iconRect = node.getBoundingClientRect();
        updateCoords({ position, iconRect, tooltipRect, offset, setCoords });
      }
    },
    [position, windowSize]
  );
  const tooltipRef = useCallback(
    node => {
      if (node !== null) {
        tooltipRect = node.getBoundingClientRect();
        updateCoords({ position, iconRect, tooltipRect, offset, setCoords });
      }
    },
    [position]
  );

  useEffect(() => {
    function handleResize() {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    }
    window.addEventListener('resize', debounce(handleResize, 50));

    // cleanup
    return () => {
      window.removeEventListener('resize', debounce(handleResize, 50));
    };
  }, []);

  return (
    <StyledTooltip coords={coords} offset={offset} ref={iconRef}>
      <span
        className={`icon${active ? ' active' : ''}`}
        onClick={() => setActive(!active)}
      >
        {icon}
      </span>
      <div ref={tooltipRef} className={`tooltip tooltip--${position}`}>
        {children}
      </div>
    </StyledTooltip>
  );
};

Tooltip.defaultProps = {
  icon: <Info />,
  position: 'top'
};

Tooltip.propTypes = {
  icon: PropTypes.node,
  position: PropTypes.oneOf([
    'bottom',
    'bottom-left',
    'bottom-right',
    'left',
    'right',
    'top',
    'top-left',
    'top-right'
  ])
};

export default Tooltip;
