// FrontendTest.cy.js

// This is a sample test
describe("My Frontend Tests", () => {
  it("should load the application", () => {
    cy.visit("https://country-info-front.onrender.com");
    it("should perform a search", () => {
      cy.get('input[type="text"]').type("Your Test Input");
      cy.get('button[type="submit"]').click();

      // Use assertions to verify the results
      cy.get(".result").should("contain", "Expected Result");
    });
  });
});
