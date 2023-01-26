describe('alerts',()=>{



    it('JS prompt Alert Example',()=>{

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        //before opening prompt to enter text in prompt we need below event and save to some variable as arrow function
        //otherwise it will be auto closed by cypress even without entering anything
       
        cy.window().then((win)=>{
                cy.stub(win,'prompt').returns('welcome')
        })
        cy.get("button[onclick='jsPrompt()']").click()

        cy.get("#result").should("have.text","You entered: welcome")

        //Now cypress will automatically clicks OK button
        //But if we need to click cancel now, we need to trigger event..
        //  cy.on("window.prompt",()=>false)

    })

    it.only('multiple input in alert/prompt',()=>{

            cy.visit('https://the-internet.herokuapp.com/basic_auth')
//if interested please check this video 
// https://youtu.be/5SNw69hHuNE?t=2549

    })


})