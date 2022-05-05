import { render } from '@testing-library/react';

import FastUiFastUiComponents from './Sidebar';

describe('FastUiFastUiComponents', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FastUiFastUiComponents />);
    expect(baseElement).toBeTruthy();
  });
});
