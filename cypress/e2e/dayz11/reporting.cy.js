// mocha reporter
// https://www.npmjs.com/package/cypress-mochawesome-reporter
// npm i --save-dev cypress-mochawesome-reporter


// setup cypress.config.js
// run spec using commandline/jenkins e.g npx cypress run --spec cypress/e2e/dayz11/reporting.cy.js

// you will see report generated  also screenshot/video for failure scenario
describe('reporting',()=>{

    it('reprt passing',()=>{

        cy.visit("https://demo.nopcommerce.com/")
        cy.title().should('eq','nopCommerce demo store')

    })


    it('reprt failing',()=>{

        cy.visit("https://demo.nopcommerce.com/")
        cy.title().should('eq','hahahaha')

    })




})