import { css } from "@emotion/react";
import { Link } from "@tanstack/react-router";

const navigationCss = css`
  padding: 2em;
  display: flex;
  justify-content: center;
  gap: 0.4em;

  a.active {
    font-weight: bold;
  }
`;

const Navigation = () => {
  return (
    <div css={navigationCss}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
};

export default Navigation;
