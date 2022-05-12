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
      fontFamily: {},

      textColor: {
        skin: {
          // old
          basic: 'var(--color-text-basic)', // black or white
          'basic-inverted': 'var(--color-text-basic-inverted)', // black or white
          base: 'var(--color-text-base)',

          primary: 'var(--color-text-primary)',
          'primary-intense': 'var(--color-text-primary-intense)',
          standard: 'var(--color-text-standard)',

          // new
          'base-dark': 'var(--color-text-base-dark)',
          'base-light': 'var(--color-text-base-light)',
          'base-inverted': 'var(--color-text-base-inverted)',
          accent: 'var(--color-text-accent)',
        },
      },
      backgroundColor: {
        skin: {
          // new
          'base-light': 'var(--color-background-base-light)',
          'base-dark': 'var(--color-background-base-dark)',
          'base-inverted': 'var(--color-background-base-inverted)',
          accent: 'var(--color-background-accent)',
          'accent-light': 'var(--color-background-accent-light)',

          // old
          base: 'var(--color-background-base)',
          layer: 'var(--color-background-layer)',
          primary: 'var(--color-background-primary)',
          'primary-light': 'var(--color-background-primary-light)',
          contrast: 'var(--color-background-contrast)',
        },
      },

      borderColor: {
        skin: {
          // new
          'base-light': 'var(--color-border-base-light)',
          'base-dark': 'var(--color-border-base-dark)',
          accent: 'var(--color-border-accent)',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
