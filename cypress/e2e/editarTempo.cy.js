describe("deve verificar o tempo do cronômetro e disparar o tempo", () => {
  beforeEach(() => {
    cy.novoSpace();
  });

  it("deve iniciar com 25:00, iniciar o cronômetro e resetar clicando no botão de reset", () => {
    cy.editarCronometro("Pomodoro", "25:00");
  });

  it("deve alterar o tempo do cronômetro para 5:00 após clicar botão resetar clicando no botão de reset", () => {
    cy.editarCronometro("Short break", "5:00");
  });

  it("deve alterar o tempo do cronômetro para 10:00 após clicar botão resetar clicando no botão de reset", () => {
    cy.editarCronometro("Long break", "10:00");
  });
});

describe("deve alterar os cronômetros pré definidos", () => {
  beforeEach(() => {
    cy.novoSpace();
  });

  it("deve alterar o valor de 25:00 do pomodoro pra mais ou pra menos, dar play e depois restartar o tempo", () => {
    cy.get('[aria-label="Pomodoro settings"]').click();

    cy.contains("Pomodoro settings").should("be.visible");
    cy.get("#mantine-ra").should("have.value", "25");
    cy.get(
      ":nth-child(1) > .mantine-Input-wrapper > .mantine-1cwybh2 > .mantine-1mzslog > .mantine-NumberInput-controlUp"
    ).click();
    cy.get("#mantine-ra").should("have.value", "30");
    cy.contains("Save").click();

    cy.contains("30:00");

    cy.get('[aria-label="Pomodoro settings"]').click();

    cy.get(
      ":nth-child(1) > .mantine-Input-wrapper > .mantine-1cwybh2 > .mantine-1mzslog > .mantine-NumberInput-controlDown"
    ).click();
    cy.get("#mantine-rd").should("have.value", "25");
    cy.contains("Save").click();

    cy.contains("25:00");

    cy.get('[aria-label="Play pomodoro"]').click();

    cy.contains("24:59");

    cy.get('[aria-label="Restart pomodoro"]').click();

    cy.contains("25:00");
  });

  it("deve alterar o valor de 5:00 do pomodoro pra mais ou pra menos, dar play e depois restartar o tempo", () => {
    cy.get('[aria-label="Pomodoro settings"]').click();

    cy.contains("Pomodoro settings").should("be.visible");
    cy.get("#mantine-rb").should("have.value", "5");
    cy.get(
      ":nth-child(2) > .mantine-Input-wrapper > .mantine-1cwybh2 > .mantine-1mzslog > .mantine-NumberInput-controlUp"
    ).click();
    cy.get("#mantine-rb").should("have.value", "10");
    cy.contains("Save").click();

    cy.contains("Short break").click();

    cy.contains("10:00");

    cy.get('[aria-label="Pomodoro settings"]').click();

    cy.get(
      ":nth-child(2) > .mantine-Input-wrapper > .mantine-1cwybh2 > .mantine-1mzslog > .mantine-NumberInput-controlDown"
    ).click();
    cy.get("#mantine-re").should("have.value", "5");
    cy.contains("Save").click();

    cy.contains("5:00");

    cy.get('[aria-label="Play pomodoro"]').click();

    cy.contains("4:59");

    cy.get('[aria-label="Restart pomodoro"]').click();

    cy.contains("5:00");
  });

  it("deve alterar o valor de 10:00 do pomodoro pra mais ou pra menos, dar play e depois restartar o tempo", () => {
    cy.get('[aria-label="Pomodoro settings"]').click();

    cy.contains("Pomodoro settings").should("be.visible");
    cy.get("#mantine-rc").should("have.value", "10");
    cy.get(
      ":nth-child(3) > .mantine-Input-wrapper > .mantine-1cwybh2 > .mantine-1mzslog > .mantine-NumberInput-controlUp"
    ).click();
    cy.get("#mantine-rc").should("have.value", "15");
    cy.contains("Save").click();

    cy.contains("Long break").click();

    cy.contains("15:00");

    cy.get('[aria-label="Pomodoro settings"]').click();

    cy.get(
      ":nth-child(3) > .mantine-Input-wrapper > .mantine-1cwybh2 > .mantine-1mzslog > .mantine-NumberInput-controlDown"
    ).click();

    cy.get("#mantine-rf").should("have.value", "10");
    cy.contains("Save").click();

    cy.contains("10:00");

    cy.get('[aria-label="Play pomodoro"]').click();

    cy.contains("9:59");

    cy.get('[aria-label="Restart pomodoro"]').click();

    cy.contains("10:00");
  });
});
