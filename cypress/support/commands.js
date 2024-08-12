Cypress.Commands.add("novoSpace", (space = Cypress.env("space")) => {
  cy.visit("/");
  cy.get("#mantine-R32tam").type(space);
  cy.get('.mantine-p7729q > .mantine-UnstyledButton-root').click();
});
