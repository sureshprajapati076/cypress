describe('selectors',()=>{


    it('ccsSelectors',()=>{

            cy.visit("http://youtube.com")

            cy.get("input#search").type("Automation Cypress")  //similar to enter keys 


            //below is optinal if you want to enter KEY using type method
            cy.get("input#search").type("Automation Cypress").type('{enter}')


           // cy.get("[name='submit_search']").click()

           cy.get("button#search-icon-legacy").click()

            cy.get("span#video-title").first().contains("Cypress") //assertions


            cy.get('something').get('anotherthing') // will result getting something and anotherthing in whole document
            //BUT
            cy.get('something').find('anotherthing') // will result anotherthing within something

    })


})