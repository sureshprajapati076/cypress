describe('custom commands',()=>{



    it('custom comand',()=>{

        cy.visit("https://demo.nopcommerce.com/")

        //below is direct approach
        //cy.get("div[class='page-body'] div:nth-child(1) div:nth-child(1) div:nth-child(2) h2:nth-child(1) a:nth-child(1)").click()


        // using custom command clickLink

        cy.wait(3000)
        cy.clickLink("Apple MacBook Pro 13-inch")
    })


    //override of cypress command can also be done...


    // custom command for re-usable steps like login feature in webpage

    it('repetitive login custom command',()=>{
        cy.visit("https://demo.nopcommerce.com/login")
        cy.wait(3000)
        cy.loginNow("suresh","praja")
    })



})