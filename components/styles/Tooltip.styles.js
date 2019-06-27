import styled, { css } from 'styled-components';

const bottomTriangle = css`
  border-bottom: var(--arrow-size) solid #fff;
  border-top: 0;
  bottom: auto;
  top: calc(-1 * var(--arrow-size) + 1px);
`;
const bottomTriangleBorder = css`
  border-bottom: var(--arrow-size) solid #ccc;
  border-top: 0;
  bottom: auto;
  top: calc(-1 * var(--arrow-border) + 2px);
`;
const rightTriangle = css`
  border-bottom: var(--arrow-size) solid transparent;
  border-top: var(--arrow-size) solid transparent;
  border-left: var(--arrow-size) solid #fff;
  border-right: 0;
  z-index: 10;
`;
const rightTriangleBorder = css`
  border-bottom: var(--arrow-border) solid transparent;
  border-top: var(--arrow-border) solid transparent;
  border-left: var(--arrow-border) solid #ccc;
  border-right: 0;
`;
const leftTriangle = css`
  border-bottom: var(--arrow-size) solid transparent;
  border-top: var(--arrow-size) solid transparent;
  border-right: var(--arrow-size) solid #fff;
  border-left: 0;
  z-index: 10;
`;
const leftTriangleBorder = css`
  border-bottom: var(--arrow-border) solid transparent;
  border-top: var(--arrow-border) solid transparent;
  border-right: var(--arrow-border) solid #ccc;
  border-left: 0;
`;

export const StyledTooltip = styled.span`
  display: inline-block;
  line-height: 0;

  .icon {
    cursor: pointer;

    &.active + .tooltip,
    &:hover + .tooltip {
      opacity: 1;
      transform: scale(1);
    }
  }

  .tooltip {
    --arrow-size: 8px;
    --arrow-border: calc(var(--arrow-size) + 2px);
    background: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
    left: ${props => props.coords.x};
    line-height: 1;
    opacity: 0;
    padding: 8px 12px;
    position: absolute;
    top: ${props => props.coords.y};
    transition: all 250ms cubic-bezier(0.42, 0, 0.175, 1);
    transform: scale(0);

    &::before {
      border-left: var(--arrow-border) solid transparent;
      border-right: var(--arrow-border) solid transparent;
      border-top: var(--arrow-border) solid #ccc;
      bottom: calc(-1 * var(--arrow-border));
      left: calc((100% - var(--arrow-border) * 2) / 2);
      content: '';
      display: inline-block;
      position: absolute;
    }

    &::after {
      border-left: var(--arrow-size) solid transparent;
      border-right: var(--arrow-size) solid transparent;
      border-top: var(--arrow-size) solid #fff;
      bottom: calc(-1 * var(--arrow-size));
      left: calc((100% - var(--arrow-size) * 2) / 2);
      content: '';
      display: inline-block;
      position: absolute;
    }

    &--bottom {
      &::before {
        ${bottomTriangleBorder}
      }
      &::after {
        ${bottomTriangle}
      }
    }

    &--bottom-left {
      &::before {
        ${bottomTriangleBorder}
        left: auto;
        right: ${props => `${props.offset}px`};
      }
      &::after {
        ${bottomTriangle}
        left: auto;
        right: ${props => `${props.offset + 2}px`};
      }
    }

    &--bottom-right {
      &::before {
        ${bottomTriangleBorder}
        left: ${props => `${props.offset}px`};
      }
      &::after {
        ${bottomTriangle}
        left: ${props => `${props.offset + 2}px`};
      }
    }

    &--left {
      &::before {
        ${rightTriangle}
        bottom: calc(50% - var(--arrow-size));
        left: auto;
        right: calc(-1 * var(--arrow-size));
      }
      &::after {
        ${rightTriangleBorder}
        bottom: calc(50% - var(--arrow-border));
        left: auto;
        right: calc(-1 * var(--arrow-border));
      }
    }

    &--right {
      &::before {
        ${leftTriangle}
        bottom: calc(50% - var(--arrow-size));
        left: calc(-1 * var(--arrow-size));
      }
      &::after {
        ${leftTriangleBorder}
        bottom: calc(50% - var(--arrow-border));
        left: calc(-1 * var(--arrow-border));
      }
    }

    &--top-left {
      &::before {
        left: auto;
        right: ${props => `${props.offset}px`};
      }
      &::after {
        left: auto;
        right: ${props => `${props.offset + 2}px`};
      }
    }

    &--top-right {
      &::before {
        left: ${props => `${props.offset}px`};
      }
      &::after {
        left: ${props => `${props.offset + 2}px`};
      }
    }
  }
`;
