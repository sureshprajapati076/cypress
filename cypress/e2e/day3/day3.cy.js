import { assert, expect } from "chai"

describe('assertions',()=>{
    it('assertionsDemo',()=>{

        cy.visit("url")
        cy.url().should('include','bla-bla')
                .and('contain','another bla')
                .and('eq','equliaityhere')
                .and('not.eq','randomexpress')   //negative evaluation


                cy.get("#myid").should("be.visible")  //visiblity of element
                .and("exist")
                
                cy.get(".classMy").should("have.length",10) // check if get returns expected element count


                //send any value to input field
                cy.get("input#elementId").type("ANy Value")

                //validate value matches or correct value is passed
                cy.get("input#elementId").should("have.value","ANy Value")




                //Explicit assertions
                let providedName='suresh';
                cy.get("some_css_locators").then((x)=>{
                        let name=x.text();   //get text from webelement
                        expect(name).to.equal(providedName)  //explicit asserttion in BDD approach

                        assert.equal(name,providedName)  // explicit assertion in TDD approach
                        assert.notEqual(name,providedName)

                }
                )

    })
})