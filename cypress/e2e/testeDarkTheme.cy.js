describe("dark theme", () => {
  beforeEach(()=>{
    cy.visit("/");
    cy.get('svg.icon.icon-tabler.icon-tabler-moon' , {timeout: 1000}).should('be.exist');
  });

  it("mudar tema com um clique", () => {
        
    cy.get('button[aria-label="Toggle theme"]')
    .as('botaoTema').click();

   cy.get('svg.icon.icon-tabler.icon-tabler-sun' , {timeout: 1000}).should('be.exist');


    cy.get('.mantine-qewbpp > .mantine-UnstyledButton-root').should('be.visible');
    cy.get('@botaoTema').click();
    cy.get('svg.icon.icon-tabler.icon-tabler-moon' , {timeout: 1000}).should('be.exist');
  });
})



