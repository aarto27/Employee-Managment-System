// ***********************************************************
// This example support/component.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

import { mount } from 'cypress/react'

Cypress.Commands.add('mount', mount)

// Example use:
// cy.mount(<MyComponent />)


describe("Login Test", () => {
    it("logs in successfully", () => {
      cy.visit("http://localhost:3000"); 
      cy.get("#email").type("sanchit@singh.com"); 
      cy.get("#password").type("123");
      cy.get("#login-btn").click(); 
      cy.contains("Dashboard").should("be.visible"); 
    });
  });