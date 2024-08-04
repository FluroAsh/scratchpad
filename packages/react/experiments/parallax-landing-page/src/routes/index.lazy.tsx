import { createLazyFileRoute } from "@tanstack/react-router";
import { css } from "@emotion/react";

import FeatureList from "@/components/feature-list";
import Header from "@/components/header/header";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

export const wrapperCss = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2em;
`;

function Index() {
  return (
    <div css={wrapperCss}>
      <Header />
      <FeatureList heading="Features" />
    </div>
  );
}
