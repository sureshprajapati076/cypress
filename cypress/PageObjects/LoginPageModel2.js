// another way of POM approach


class Login{


    txtUserName = "input[placeholder='Username']"
    txtPassword = "input[placeholder='Password']"
    submitButton = "button[type='submit']"


    //Even Another way
    elements={
        userName: ()=>cy.get("input[placeholder='Username']"),
        userPass: ()=>cy.get("input[placeholder='Password']")
    }



    setUserName(username){
      //  cy.get(this.txtUserName).type(username)
      this.elements.userName().type(username)
    }

    setPassword(password){
        cy.get(this.txtPassword).type(password)
    }

    clickSubmit(){
        cy.get(this.submitButton).click()
    }

}
export default Login;