describe('child tabs',()=>
{
    it('child',()=>{

        // if link opens in new tab or new window. cypress can not handle
        // we have to workaround
        // remove target attribute from link then it will run in same page/tab

        // use .invoke method

        cy.visit('https://the-internet.herokuapp.com/windows')
        cy.get('.example > a').invoke('removeAttr','target').click()


        cy.wait(5000)
        cy.go('back')

    })



    it.only('child Approach 2',()=>{

        

        cy.visit('https://the-internet.herokuapp.com/windows')
        

        cy.get('.example > a').then((xyz)=>{


            let url = xyz.prop("href")

            cy.visit(url)



        })

        cy.wait(5000)
        cy.go('back')


    })
























    
})