// one of way of POM approach
// every element we create action method, inside action method we located element and perform action

class Login{

    setUserName(username){
        cy.get("input[placeholder='Username']").type(username)
    }

    setPassword(password){
        cy.get("input[placeholder='Password']").type(password)
    }

    clickSubmit(){
        cy.get("button[type='submit']").click()
    }

}
export default Login;