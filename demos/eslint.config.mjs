import js from "@eslint/js";
import globals from "globals";
import airbnbBase from "eslint-config-airbnb-base";
import importPlugin from "eslint-plugin-import";

export default [
  js.configs.recommended,
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      globals: {
        ...globals.node,
      },
    },
    plugins: {
      import: importPlugin,
    },
    rules: {
      ...airbnbBase.rules,
      "no-console": "error",
      "no-undef": "off",
      "no-unused-vars": ["warn", { argsIgnorePattern: "next" }],
    },
  },
];
