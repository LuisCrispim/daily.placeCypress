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
