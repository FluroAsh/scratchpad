import reactLogo from "@/assets/react.svg";
import typescriptLogo from "@/assets/typescript.svg";
import viteLogo from "/vite.svg";

import { header } from "./header.styles.ts";

const Header = () => (
  <div css={header}>
    <div className="logos">
      <a href="https://vitejs.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
      <a href="https://www.typescriptlang.org/" target="_blank">
        <img src={typescriptLogo} className="logo typescript" alt="TypeScript logo" />
      </a>
    </div>

    <h1>Vite + React & TypeScript</h1>
  </div>
);

export default Header;
