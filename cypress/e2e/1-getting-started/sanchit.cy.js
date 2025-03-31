describe('login', () =>{
    it('login', () => {
      cy.visit("localhost:5173/");
      cy.wait(3000); 
      cy.get("#email").type("sanchit@singh.com");
      cy.wait(3000); 
      cy.get("#password").type("123");
      cy.wait(3000); 
      cy.get("#login-btn").click();
      cy.wait(5000);
      cy.get(".Logout-Btn").click();
      });
  })