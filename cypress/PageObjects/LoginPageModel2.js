// another way of POM approach


class Login{

    
    txtUserName = "input[placeholder='Username']"
    txtPassword = "input[placeholder='Password']"
    submitButton = "button[type='submit']"



    setUserName(username){
        cy.get(this.txtUserName).type(username)
    }

    setPassword(password){
        cy.get(this.txtPassword).type(password)
    }

    clickSubmit(){
        cy.get(this.submitButton).click()
    }

}
export default Login;