//Fixture Data Driven testing (JSON data)
describe('fixture',()=>{





    it('test fixture',()=>{
        cy.visit('https://google.com')

        //Direct access method
        cy.fixture('testdata').then((data)=>{
            cy.get("input[title='Search']").type(data.anotherSearch)
        })


        
    })


    //If below all three it blocks uses fixture, then we can use hook to get data only once in global variable

    let userData;
    before('readJson',()=>{
        cy.fixture('testdata').then((data)=>{
            userData=data;
        })
    })

    it('test fixture A',()=>{
        cy.visit('https://google.com')
        cy.get("input[title='Search']").type(userData.searchText)
    })

    it('test fixture B',()=>{
        cy.visit('https://google.com')
        cy.get("input[title='Search']").type(userData.anotherSearch)
    })

    it('test fixture C',()=>{
        cy.visit('https://google.com')
        cy.get("input[title='Search']").type(userData.thirdSearchtext)
    })


})