// apps/app1/tailwind.config.js
const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const { join } = require('path');

module.exports = {
  content: [
    join(__dirname, 'src/**/*!(*.stories|*.spec).{ts,tsx,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },

      textColor: {
        skin: {
          base: 'var(--color-text-base)',
          'base-dark': 'var(--color-text-base-dark)',
          'base-light': 'var(--color-text-base-light)',
          primary: 'var(--color-text-primary)',
          standard: 'var(--color-text-standard)',
        },
      },
      backgroundColor: {
        skin: {
          base: 'var(--color-background-base)',
          layer: 'var(--color-background-layer)',
          primary: 'var(--color-background-primary)',
          'primary-light': 'var(--color-background-primary-light)',
          contrast: 'var(--color-background-contrast)',
        },
      },

      borderColor: {
        skin: {
          base: 'var(--color-border-base)',
          'base-dark': 'var(--color-border-base-dark)',
        },
      },
    },
  },
  plugins: [],
};
