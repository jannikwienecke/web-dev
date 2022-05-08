import { render } from '@testing-library/react';

import AppSideMenuHeader from './AppSideMenuHeader';

describe('AppSideBarHeader', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <AppSideMenuHeader appName="App" appDescription="App Description" />
    );
    expect(baseElement).toBeTruthy();
  });
});
