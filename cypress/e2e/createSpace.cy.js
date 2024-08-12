describe("Novo space", () => {
  it("Deve criar um novo space", () => {
    cy.novoSpace("lazer");
    cy.url().should('be.eq', `${Cypress.config('baseUrl')}/lazer`)
  });
});
