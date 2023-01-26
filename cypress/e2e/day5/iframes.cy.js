describe('iframes',()=>{


    it('Approach 1st iframe',()=>{


        cy.visit('https://the-internet.herokuapp.com/iframe')
        
        const iframe = cy.get('#mce_0_ifr')
            .its('0.contentDocument.body')
            .should('be.visible')
            .then(cy.wrap)


            cy.wait(3000)
            iframe.clear().type('WElCome My Friend {ctrl+a}')
            cy.get("[aria-label='Bold']").click()
            cy.wait(3000)

    })


    // for second approach we use command.js in support folder

    it.only('With Custom Command ',()=>{
        cy.visit('https://the-internet.herokuapp.com/iframe')

        const iframe = cy.getIframe('#mce_0_ifr')
        cy.wait(3000)
        iframe.clear().type('WElCome My Friend {ctrl+a}')
        cy.get("[aria-label='Bold']").click()
        cy.wait(3000)




    })


    // Thid approach is iframe plugins

    // https://gitlab.com/kgroat/cypress-iframe


})