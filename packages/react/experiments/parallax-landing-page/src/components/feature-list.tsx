import { css } from "@emotion/react";

const featuresCss = css`
  > h2 {
    font-size: 1.5em;
  }

  > p {
    line-height: 1.8;
  }
`;

const FeatureList = ({ heading }: { heading: string }) => {
  return (
    <div css={featuresCss}>
      <h2>{heading}</h2>
      <p>
        Styling with{" "}
        <a href="https:emotion.sh/docs/introduction" target="_blank">
          Emotion
        </a>{" "}
        &/or{" "}
        <a href="https:tailwindcss.com/" target="_blank">
          TailwindCSS
        </a>
      </p>
      <p>
        Data fetching with{" "}
        <a href="https:tanstack.com/query/latest" target="_blank">
          TanStack Query
        </a>
      </p>
      <p>
        Routing with{" "}
        <a href="https:tanstack.com/router/latest" target="_blank">
          TanStack Router
        </a>
      </p>
      <p>
        Testing with{" "}
        <a href="https:jestjs.io/" target="_blank">
          Jest
        </a>{" "}
        &{" "}
        <a href="https:testing-library.com/" target="_blank">
          React Testing Library
        </a>
      </p>

      <p>
        Form management with{" "}
        <a href="https:react-hook-form.com/" target="_blank">
          React Hook Form
        </a>
      </p>
    </div>
  );
};

export default FeatureList;
