import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import * as fs from "fs";

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    esbuildOptions: {
      plugins: [
        {
          name: "esbuild-plugin-react-virtualized",
          setup({ onLoad }) {
            onLoad(
              {
                filter: /react-virtualized[/\\]dist[/\\]es[/\\]WindowScroller[/\\]utils[/\\]onScroll\.js$/,
              },
              async ({ path }) => {
                const code = fs.readFileSync(path, "utf8");
                const broken = `import { bpfrpt_proptype_WindowScroller } from "../WindowScroller.js";`;
                return { contents: code.replace(broken, "") };
              }
            );
          },
        },
      ],
    },
  },
  plugins: [react()],
});
