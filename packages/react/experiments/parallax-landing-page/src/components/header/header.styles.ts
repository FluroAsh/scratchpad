import { css, keyframes } from "@emotion/react";

const logoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const header = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5em;

  > .logos {
    display: flex;
    justify-content: center;
    gap: 1em;
  }

  .logo {
    height: 8em;
    padding: 0.8em;
    will-change: filter;
    transition: filter 300ms;

    &:hover {
      filter: drop-shadow(0 0 2em hsla(237, 100%, 70%, 0.67));
    }
    &.react:hover {
      filter: drop-shadow(0 0 2em hsla(207, 100%, 70%, 0.67));
    }
    &.typescript:hover {
      filter: drop-shadow(0 0 2em hsla(204, 100%, 50%, 0.67));
    }
  }

  a:nth-of-type(2) .logo {
    animation: ${logoSpin} infinite 20s linear;
  }
`;
