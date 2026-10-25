import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  resolve: { tsconfigPaths: true },
  test: {
    environment: "jsdom",
    setupFiles: ["./tests/setup.ts"],
    include: ["tests/unit/**/*.test.{ts,tsx}"],
    coverage: {
      provider: "v8",
      include: [
        "src/lib/**",
        "src/i18n/**",
        "!src/i18n/dictionaries/**",
        "src/content/**",
        "src/config/**",
        "src/components/contact/**",
        "src/components/projects/**",
        "src/app/api/**",
        "src/app/sitemap.ts",
        "src/app/robots.ts",
      ],
      thresholds: { lines: 80, functions: 80, branches: 80, statements: 80 },
    },
  },
});
