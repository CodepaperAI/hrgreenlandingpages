import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

export default defineConfig([
  ...nextVitals,
  ...nextTypescript,
  {
    rules: {
      "@next/next/no-img-element": "off",
      "@next/next/next-script-for-ga": "off"
    }
  },
  globalIgnores([
    ".next/**",
    "node_modules/**",
    "out/**",
    "next-env.d.ts"
  ])
]);
