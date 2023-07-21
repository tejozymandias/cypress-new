describe("alltests", () => {
  it("Visit Website", () => {
    cy.visit("https://www.browserstack.com/users/sign_in");
    cy.get("#user_email_login").type("tejendra+demo@browserstack.com");
    cy.get("#user_password").type("Hendrix@12");
    cy.get("#user_submit").click();
  });

  it("Navigates to LIVE and selects a browser", () => {
    cy.window().then((win) => {
      win.document.addEventListener("DOMContentLoaded", function () {
        cy.visit("http://live.browserstack.com/");
        cy.get('[data-test-ositem="quicklaunch"]').click();
        cy.wait("2000");
        cy.get(
          '[data-test-browser="edge"] > .dnd__droppable > :nth-child(4) > [data-rbd-draggable-context-id="3"] > .browser-version-list__element'
        ).click();
        cy.wait("5000");
      });
    });
  });
});
