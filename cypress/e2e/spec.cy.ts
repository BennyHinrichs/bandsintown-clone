// make sure you have the dev environment running
describe("Bandsintown Clone", () => {
  it("queries for a band and updates the hero box", () => {
    cy.visit("http://localhost:8080/");
    cy.findByRole("searchbox").type("Time, the Valuator{enter}");

    cy.findAllByRole("img", { name: "Time, The Valuator" }).should(
      "have.length",
      2
    );
    cy.findByRole("heading", { name: "Time, The Valuator" }).should("exist");
    cy.findByRole("heading", { name: /\d+ followers/i }).should("exist");
    cy.findByRole("heading", { name: /\d+ upcoming concerts/i }).should(
      "exist"
    );
    cy.findByRole("button", { name: "Follow" }).should("exist");
  });
});
