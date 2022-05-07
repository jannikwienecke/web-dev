import './tailwind-imports.css';
import { themes } from '@storybook/theming';

export const parameters = {
  themes: {
    default: 'twitter',
    list: [
      { name: 'Dark Theme', class: 'theme-dark', color: '#00aced' },
      { name: 'facebook', class: 'theme-fb', color: '#3b5998' },
    ],
  },

  backgrounds: {
    default: 'my-background',
    values: [
      {
        name: 'my-background',
        value: '#F8F9FE',
      },
    ],
  },
};
