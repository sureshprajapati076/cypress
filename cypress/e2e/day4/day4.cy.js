describe('checkbox and radio',()=>{



    it('testRadioBox',()=>{

            cy.visit("https://itera-qa.azurewebsites.net/home/automation")

            cy.get("input#male").should("be.visible")
            cy.get("input#female").should("be.visible")

            cy.get("input#male").check().should("be.checked")

            cy.get("input#male").should("not.be.checked")





    })

    it('testCheckBox',()=>{

        cy.visit("https://itera-qa.azurewebsites.net/home/automation")

        cy.get("input#monday").should("be.visible")
        cy.get("input#tuesday").should("be.visible")

        cy.get("input#monday").check().should("be.checked")
        cy.get("input#tuesday").check().should("not.be.checked")
        cy.get("input#wednesday").should("not.be.checked")



        //first and last 
        // we get single or multiple elements from get method
        cy.get('cssTogetMultipleElements').first().click();
        cy.get('cssTogetMultipleElements').last().click();


        // for dropdown (which usually in website will use with divs)
        //if we happen to find with select option in web DOM then use below

        cy.get("#idForSelect").select('ValueToSelect')
                                .should("have.value","ValueToSelect")





})


//belwo will skip spec
it.skip('skip this test / spec',()=>{

    //do something

})

it.only('Only this will run',()=>{
    //steps
})







})