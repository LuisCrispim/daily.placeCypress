Cypress.Commands.add("novoSpace", (space = Cypress.env("space")) => {
  cy.visit("/");
  cy.get("#mantine-R32tam").type(space);
});
