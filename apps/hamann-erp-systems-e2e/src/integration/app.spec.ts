import { getGreeting } from '../support/app.po';

describe('hamann-erp-systems', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    // Custom command example, see `../support/commands.ts` file
  cy.contains(/user/i)
  });
});
