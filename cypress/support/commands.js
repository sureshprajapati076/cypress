// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/// <reference types="Cypress" />
/// <reference types="@cypress/xpath" />

// below is custom command that may be useful for repetive tasks of getting iframe for instance
Cypress.Commands.add('getIframe',(iframe)=>{
    return cy.get(iframe)
            .its('0.contentDocument.body')
            .should('be.visible')
            .then(cy.wrap)
})

require('@4tw/cypress-drag-drop')


//Custom Command for clicking on link using label for file customcommand.cy.js

Cypress.Commands.add('clickLink',(label)=>{
    cy.get('a').contains(label).click()
})

Cypress.Commands.add('loginNow',(user,pass)=>{
    cy.get('#Email').type(user)
    cy.get('#Password').type(pass)
    cy.get('.new-wrapper > .buttons > .button-1').click()
})