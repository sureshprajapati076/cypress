describe('hooks suite',()=>{


    // 4 hooks => before after beforeEach afterEach


    // before will execute only once before all it block

    // beforeEach will execute once per it block.... 



    //tags are either only or skip


    //example of tags

    // it.only()
    // it.skip()


    before('before',()=>{
        cy.log('before')
    })

    after('after',()=>{
        cy.log('after')
    })

    beforeEach('beforeEach',()=>{
        cy.log('beforeEach')
    })

    afterEach('afterEach',()=>{
        cy.log('afterEach')
    })



    it('test1',()=>{
        cy.log('test1')
    })

    it('test2',()=>{
        cy.log('test2')
    })

    it('test3',()=>{
        cy.log('test3')
    })















})