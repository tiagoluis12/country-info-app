// FrontendTest.cy.js

// This is a sample test
describe("Frontend Tests", () => {
  it("should load the application", () => {
    cy.visit("http://localhost:3000");
    it("should perform a search", () => {
      cy.get('input[type="text"]').type("Your Test Input");
      cy.get('button[type="submit"]').click();

      // Use assertions to verify the results
      cy.get(".result").should("contain", "Expected Result");
    });
  });
});

// To test the application using the frontend hosted on Render, you have to change the URL in the test to the URL of the application on Render.
//For example, http://localhost:3000, you would change the URL in the test to https://country-info-front.onrender.com.
