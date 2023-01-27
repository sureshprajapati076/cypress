//Page Object Model
import Login from "../../PageObjects/LoginPageModel2"
describe('pom model',()=>{
    it('pom',()=>{

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')


        cy.wait(3000)

        const ln = new Login();
        ln.setUserName('Admin')
        ln.setPassword('admin123')
        ln.clickSubmit()


    })
})