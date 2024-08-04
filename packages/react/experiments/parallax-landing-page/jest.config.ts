import type { JestConfigWithTsJest } from "ts-jest";

export default {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  testMatch: ["<rootDir>/**/*.test.{js,jsx,ts,tsx}"],
  transform: {
    "^.+\\.tsx?$": ["ts-jest", { tsconfig: "./tsconfig.app.json" }],
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
    "^.+\\.svg$": "jest-transformer-svg",
    "^@/(.*)$": "<rootDir>/src/$1", // Resolves absolute imports to `src/*`
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
} satisfies JestConfigWithTsJest;
