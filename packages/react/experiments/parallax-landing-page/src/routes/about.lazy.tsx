import { css } from "@emotion/react";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/about")({
  component: About,
});

const aboutCss = css`
  > span {
    background-color: hsla(0, 0%, 0%, 0.1);
    border-radius: 0.5em;
    padding: 1em;
    transition:
      background-color 0.2s,
      filter 0.2s;

    &:hover {
      background-color: hsla(133, 255%, 255%, 0.2);
      filter: drop-shadow(0 0 2em hsla(237, 100%, 70%, 0.67));
    }

    a {
      font-weight: bold;
    }
  }
`;

function About() {
  return (
    <div css={aboutCss}>
      <span>
        Made with ❤️ by <a href="https://github.com/FluroAsh">Ashley Thompson</a>
      </span>
    </div>
  );
}
