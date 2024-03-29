// apps/app1/tailwind.config.js
const { createGlobPatternsForDependencies } = require("@nrwl/react/tailwind");
const { join } = require("path");

module.exports = {
  content: [
    join(__dirname, "src/**/*!(*.stories|*.spec).{ts,tsx,html}"),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      fontFamily: {},

      colors: {
        "shadow-base-light": "var(--color-shadow-base-light)",
        "shadow-base-dark": "var(--color-shadow-base-dark)",
        accent: "var(--theme-color)",
        success: "var(--color-success)",
        error: "var(--color-error)",
      },

      textColor: {
        skin: {
          "base-dark": "var(--color-text-base-dark)",
          "base-light": "var(--color-text-base-light)",
          "base-inverted": "var(--color-text-base-inverted)",
          accent: "var(--color-text-accent)",
        },
      },
      backgroundColor: {
        skin: {
          "base-light": "var(--color-background-base-light)",
          "base-dark": "var(--color-background-base-dark)",
          "base-inverted": "var(--color-background-base-inverted)",
          accent: "var(--color-background-accent)",
          "accent-light": "var(--color-background-accent-light)",
        },
      },

      borderColor: {
        skin: {
          "base-light": "var(--color-border-base-light)",
          "base-dark": "var(--color-border-base-dark)",
          accent: "var(--color-border-accent)",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
