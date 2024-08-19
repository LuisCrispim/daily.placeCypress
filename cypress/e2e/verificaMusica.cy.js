describe("Teste de botão de música", () => {
  beforeEach(() => {
    cy.novoSpace();
  });

  it("Deve ativar a música quando os botão de Lofi for clicado", () => {
    cy.testeMusica("'Playing Lofi'");
  });

  it("Deve ativar a música quando os botão de Playing Coffee shop for clicado", () => {
    cy.testeMusica("'Playing Coffee shop'");
  });

  it("Deve ativar a música quando os botão de Playing Forest for clicado", () => {
    cy.testeMusica("'Playing Forest'");
  });

  it("Deve ativar a música quando os botão de Playing Fireplace for clicado", () => {
    cy.testeMusica("'Playing Fireplace'");
  });

  it("Deve ativar a música quando os botão de Playing Rain for clicado", () => {
    cy.testeMusica("'Playing Rain'");
  });

  it("Deve ativar a música quando os botão de Playing Waves for clicado", () => {
    cy.testeMusica("'Playing Waves'");
  });

  it("Deve ativar a música quando os botão de Playing Vaporwave/Synthwave for clicado", () => {
    cy.testeMusica("'Playing Vaporwave/Synthwave'");
  });

  it("Deve ativar a música quando os botão de Playing ASMR for clicado", () => {
    cy.testeMusica("'Playing ASMR'");
  });

  it("Deve ativar a música quando os botão de Playing City walk for clicado", () => {
    cy.testeMusica("'Playing City walk'");
  });

  it("Deve ativar a música quando os botão de Playing Lofi Girl for clicado", () => {
    cy.testeMusica("'Playing Lofi Girl'");
  });
});
