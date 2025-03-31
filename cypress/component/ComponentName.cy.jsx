describe('ComponentName.cy.jsx', () => {
  it('playground', () => {
    // cy.mount()
  })
})


describe('login', () =>{
  it('login', () => {
    cy.visit("http://localhost:5173");
    cy.get("#email").type("sanchit@singh.com");
    cy.get("#password").type("123");
    cy.get("#login-btn").click();
    cy.contains("Dashboard").should("be.visible");
    });
})