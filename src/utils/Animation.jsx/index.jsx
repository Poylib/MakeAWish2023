import { keyframes } from 'styled-components';

export const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
export const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;
export const bell = keyframes`
  0%,
  50% {
    transform: rotate(0deg);
  }
  5%,
  15%,
  25%,
  35%,
  45% {
    transform: rotate(13deg);
  }
  10%,
  20%,
  30%,
  40% {
    transform: rotate(-13deg);
  }
`;
