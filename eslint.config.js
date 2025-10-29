import js from "@eslint/js";
import { includeIgnoreFile } from "@eslint/compat";
import globals from "globals";
import { fileURLToPath } from "node:url";
import ts from "typescript-eslint";
import reactRefresh from "eslint-plugin-react-refresh";
import reactHooks from "eslint-plugin-react-hooks";
import reactPlugin from "eslint-plugin-react";
import jestDom from "eslint-plugin-jest-dom";
import eslintConfigPrettier from "eslint-plugin-prettier/recommended";
import { defineConfig } from "eslint/config";

const gitignorePath = fileURLToPath(new URL("./.gitignore", import.meta.url));
const prettierignorePath = fileURLToPath(new URL("./.prettierignore", import.meta.url));

export default defineConfig(
  includeIgnoreFile(gitignorePath),
  includeIgnoreFile(prettierignorePath),
  js.configs.recommended,
  ts.configs.recommended,
  reactRefresh.configs.vite,
  reactHooks.configs["recommended-latest"],
  {
    files: ["**/*.{js,jsx,mjs,cjs,ts,tsx}"],
    plugins: {
      reactPlugin,
      jestDom,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
      },
    },
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  eslintConfigPrettier,
);
