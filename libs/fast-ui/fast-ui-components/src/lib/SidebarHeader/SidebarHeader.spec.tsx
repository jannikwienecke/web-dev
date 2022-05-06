import { render } from '@testing-library/react';

import SidebarHeader from './SidebarHeader';

describe('SidebarHeader', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SidebarHeader />);
    expect(baseElement).toBeTruthy();
  });
});
