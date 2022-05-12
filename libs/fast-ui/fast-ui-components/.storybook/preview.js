import './tailwind-imports.css';

export const parameters = {
  themes: {
    default: 'Red',
    list: [
      { name: 'White Theme ⚪️', class: 'theme-light', color: '#fff' },
      { name: 'Dark Theme 🖤', class: 'theme-dark', color: '#32324d' },
    ],
  },

  backgrounds: {
    default: 'my-background',
    values: [
      {
        name: 'my-background',
        value: 'hsl(260, 20%, 98%)',
      },
    ],
  },
};
