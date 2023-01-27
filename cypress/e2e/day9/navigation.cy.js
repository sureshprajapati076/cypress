describe('navigation demo',()=>{


    // go() command to go forward backward...
    // reload() command
    it('navigation sample',()=>{


        cy.visit("https://demo.nopcommerce.com/")
        cy.wait(3000)
        cy.get("div[class='page-body'] div:nth-child(1) div:nth-child(1) div:nth-child(2) h2:nth-child(1) a:nth-child(1)").click()
        cy.wait(3000)

        cy.go('back')


        cy.wait(3000)

        cy.go('forward')


        //reloads page
        cy.reload()












    })





})