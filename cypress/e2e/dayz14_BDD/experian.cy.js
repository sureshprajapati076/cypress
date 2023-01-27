describe('experian', () => {
    it('experian demo', () => {
        cy.visit('https://www.expedia.com')
        cy.get('body').type('{esc}')
        let sample = "#d1-btn"
        cy.get(sample).click()
        clickNextMonthByRecursion('July 2023')
        cy.get("button[aria-label='Jul 20, 2023']").click()

        clickNextMonthByRecursion('September 2023')
        cy.get("button[aria-label='Sep 20, 2023']").click()

        cy.get('.uitk-date-picker-menu-footer > .uitk-layout-flex-item > .uitk-button').click()

        cy.scrollTo(0,-500,{duration:5000})

    })
})

function clickNextMonthByRecursion(monthYear) {
    //  cy.wait(5000)
    cy.get("button[data-stid='date-picker-paging']").eq(1).click()
    cy.get('.uitk-date-picker-month-name.uitk-type-medium').first().then((webele) => {
        cy.log(webele.text())
        if (webele.text() == monthYear) {
            // cy.wait(10000)
            // cy.log('found')
            return
        }
        else {
            clickNextMonthByRecursion(monthYear);
        }
    })
}