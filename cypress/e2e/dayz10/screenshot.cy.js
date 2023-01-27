describe('screenshot',()=>{
    it('screenshot test',()=>{

        cy.visit("https://demo.nopcommerce.com/")
        //below will screenshot with filename homepage.png
        cy.screenshot('homepage');
        cy.wait(3000)
        cy.get("div[class='page-body'] div:nth-child(1) div:nth-child(1) div:nth-child(2) h2:nth-child(1) a:nth-child(1)").click()
        cy.wait(3000)



    })


    // for screenshot on failure, it does take screenshot and videos on failure if we run specs under jenkins or using command prompt
    // and note assertions should fail to get screenshot and video automatically
    it.only('screenshot on failure',()=>{

        cy.visit("https://demo.nopcommerce.com/")

    })

})