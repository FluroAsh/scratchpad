import { css, keyframes } from "@emotion/react";

const scrollFrame = keyframes`
  0% {
    transform: translateX(0);
  }
  100% { 
    transform: translateX(-50%);
  }

`;
export const containerCss = css`
  display: flex;
  flex-direction: column;
  width: 100%;

  .parallax {
    height: 100vh;
    position: relative;
    background-image: url("/background.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    overflow-x: hidden;

    h1 {
      z-index: 1;
      white-space: nowrap;
      position: absolute;
      font-size: 3rem;
      left: 50%;
      transform: translate(-50%, -100%);
    }

    .rocks-fg {
      position: absolute;
      height: 30%;
      width: 400%;
      background-image: url("/rocks1.png");
      background-size: 25% 100%;
      background-repeat: repeat-x;
      animation: ${scrollFrame} 120s linear infinite;
    }
    .rocks-bg {
      position: absolute;
      height: 30%;
      width: 400%;
      background-image: url("/rocks2.png");
      background-size: 25% 100%;
      background-repeat: repeat-x;
      animation: ${scrollFrame} 240s linear infinite;
    }

    .hills {
      position: absolute;
      height: 30%;
      width: 400%;
      background-image: url("/hills.png");
      background-size: 25% 100%;
      background-repeat: repeat-x;
      animation: ${scrollFrame} 60s linear infinite;
    }

    .foreground {
      position: absolute;
      bottom: 0;
      height: 33.33%;
      width: 400%;
      background-image: url("/foreground.png");
      background-size: 25% 100%;
      background-repeat: repeat-x;
      animation: ${scrollFrame} 30s linear infinite;
    }
  }
`;

export const sectionTwoCss = css`
  padding: 2em;
  width: 100%;
  height: 800px;
  background-color: #862f4e;

  h3 {
    color: white;
    text-align: center;
    margin-top: 50px;
    font-size: 2rem;
  }
`;
