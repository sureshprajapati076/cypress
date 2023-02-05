describe('citi bank account opening feature',()=>{


    it.only('user logins',()=>{

        cy.visit('https://uat03.citi.com/')
        cy.get('#signOnMobileALink').click()

        cy.get('#username').type('card_none39')
        cy.get('#password').type('Test@123$')
        
        cy.get('#signInBtn').click()
        cy.wait(5000)
        cy.get('button.cds-button.ng-tns-c358-4.cds-button-xs.cds-button-icon-round.cds-button-secondary').eq(1).click()

        cy.get('.row > .box-container > [href="/US/ag/banking/checking-account"] > .box-icon-wrapper > .box-icon').click()
        cy.get('#panel_EVERYDAY > x-card-group > .flex-container > :nth-child(1) > .card > x-card-buttons > .buttons-col > .btn-container > :nth-child(1) > .cta').click()
       
        cy.wait(5000)
        cy.get('button.btn.btn-primary.large.ng-star-inserted').click()

    })


    it('user is in open checking acct',()=>{
        cy.visit('https://uat3.online.citi.com/US/ag/easyaddbank/easyadd?product_list=access_account&package=access_account&Promo_ID=4HW9264JMBCOMA')
cy.wait(5000)
    })













})