
describe('auto suggestin',()=>{

//auto suggestion drop down

it('auto suggestion',()=>{

    cy.visit('https://www.wikipedia.org')
    cy.get('#searchInput')
    cy.get('.suggestion-title').contains('Seattle Seahawks').click()

})






it('dynamic drop down',()=>{

    cy.visit('https://www.google.com')
    cy.get("input[name='q']").type('Seattle')
    cy.wait(5000)
    cy.get('div.wM6W7d>span').each(($el, index, $list)=>{

            if($el.text()=='Seattle Seahawks'){
                cy.wrap($el).click()
            }


    }

    )
    

})






})