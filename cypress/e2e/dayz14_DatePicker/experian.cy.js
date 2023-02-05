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
    // cy.get("button[data-stid='date-picker-paging']").eq(1).click()


    let monthYears = []
    cy.get('.uitk-date-picker-month-name.uitk-type-medium').each(($mmyy,index,$mmYYYY)=>{
        cy.wrap($mmyy).then((ele)=>{
            monthYears.push(ele.text())
        })
    })

    //Note normal js scripts runs before cypress commands so we need to include non-cypress logic inside cy.then so we can expect to run in sequential order
    cy.wait(5000).then(()=>{
        if(!monthYears.includes(monthYear)){
            cy.get("button[data-stid='date-picker-paging']").eq(1).click()
            clickNextMonthByRecursion(monthYear)
        }
    })
    
}