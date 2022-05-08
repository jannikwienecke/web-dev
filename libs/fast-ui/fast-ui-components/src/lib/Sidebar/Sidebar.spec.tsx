import '@testing-library/jest-dom';
import { render, fireEvent, screen } from '@testing-library/react';

import { composeStories } from '@storybook/testing-react';

import * as SidebarStories from './Sidebar.stories'; //👈  Our stories imported here

const { Collapsed } = composeStories(SidebarStories);

it('Shows collapsed sidebar - can toggle to uncollapsed', async () => {
  render(<Collapsed />);

  const el = await screen.findByText(/fast/i);

  expect(el).not.toBeVisible();

  fireEvent.click(await screen.findByRole('button', { name: /open sidebar/i }));

  expect(await screen.findByText(/fast/i)).toBeVisible();
});
