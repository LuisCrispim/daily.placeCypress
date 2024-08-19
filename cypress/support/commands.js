Cypress.Commands.add("novoSpace", (space = Cypress.env("space")) => {
  cy.visit("/");

  cy.get("#mantine-R32tam").type(space);
  cy.contains("button", "Create").click();

  cy.contains("div", `${space}'s place`);
});

Cypress.Commands.add("testeMusica", (seletor) => {
  cy.get(`[data-splitbee-event=${seletor}]`).click();

  cy.get(".mantine-Slider-thumb").should("have.attr", "aria-valuenow", "1");
});

Cypress.Commands.add("editarCronometro", (pomodoro, tempo) => {
  cy.contains(pomodoro).click();
  cy.get(".mantine-pagcj1 > .mantine-Text-root")
    .as("cronometro")
    .contains(tempo);
  cy.get('[aria-label="Play pomodoro"]').click();
  cy.get('[aria-label="Restart pomodoro"]').click();
  cy.get("@cronometro").contains(tempo);
});
