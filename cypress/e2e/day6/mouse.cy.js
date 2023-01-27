describe('mouse actions', () => {
    it('mouser hover', () => {

        cy.visit('https://demo.opencart.com')
        cy.get('a.nav-link.dropdown-toggle').first().trigger('mouseover').click()




        //right click

        // cy.get('a.nav-link.dropdown-toggle').first().trigger('mouseover').rightclick()

        // double click
        //    cy.get('a.nav-link.dropdown-toggle').first().trigger('mouseover').dblclick()


       






    })

     // drag drop => use plugin  https://www.npmjs.com/package/@4tw/cypress-drag-drop
        // check command.js for require drag n drop
    it('drag n drop',()=>{
        cy.visit('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')
        cy.wait(3000)
        cy.get("#box6").drag("#box106",{force:true})
    })


    it.only('scrolling',()=>{

        cy.visit('')
        cy.get('elementToScroll').scrollIntoView({duration:2000})






    })



})