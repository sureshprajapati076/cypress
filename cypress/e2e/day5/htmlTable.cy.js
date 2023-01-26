describe('html table', () => {



    beforeEach('beforeEach', () => {
        cy.log('before each it')
    })


    //using find method
    it('table read', () => {



        cy.visit('https://mdbootstrap.com/docs/b4/jquery/tables/pagination/')



        cy.get('#dtBasicExample > tbody >tr').each(($row, index, $list) => {



            cy.wrap($row).find("td").each(($col, index, $cols) => {

                cy.wrap($col).then((ele) => {
                    cy.log(ele.text())

                })

            })
        })

    })



    //using within method
    it('another way', () => {


        cy.visit('https://mdbootstrap.com/docs/b4/jquery/tables/pagination/')


        cy.get('#dtBasicExample > tbody >tr').each(($row, index, $list) => {



            cy.wrap($row).within(() => {

                cy.get('td').each(($col, index, $cols) => {
                    cy.wrap($col).then((ele) => {
                        cy.log(ele.text())
                    })
                })


            })

        })



    })


    //try to get values in list of maps
    // to get value from promise .then check out this https://stackoverflow.com/questions/69086299/storing-element-text-in-an-array-and-accessing-it-later
    it.only('table read to list of map', () => {
        cy.visit('https://mdbootstrap.com/docs/b4/jquery/tables/pagination/')

        let arr = []
        let headersList = []

        cy.get('#dtBasicExample > thead >tr').each(($row,index,$rowList)=>{
            cy.wrap($row).find("th").each(($col,index,$colList)=>{
                cy.wrap($col).then((ele)=>{
                  //  debugger  
                  // NOTE ON DEBUGGER... uncomment above debugger line and in cypress chrome open developer tools and re-run it will stop/pause in debugger
                    headersList.push(ele.text())
                })
            })
        })

        cy.get('#dtBasicExample > tbody >tr').each(($row, index, $list) => {
            let map= new Map()
            cy.wrap($row).find("td").each(($col, index, $cols) => {
                cy.wrap($col).then((ele) => {
                   map.set(headersList[index],ele.text())
                })
               
            })
            arr.push(map)
        })

        //printing table
        cy.then(()=>{
            arr.forEach((row)=>{
                headersList.forEach((col)=>{
                    cy.log(row.get(col))
                })
            })       
           
        })



        // PRINTING ALL VALUES
        // cy.get('@myArray1').then((ary) => {

        //     cy.log("LENGTH => "+ary.length)
           
        //     ary.forEach((el,index)=>{
        //         el.forEach((v,k)=>{
        //             cy.log("KEY: "+k + " VAL: "+v)
        //         })


        //     })




        // })

        // cy.get('@myArray1').then((ary) => {
        //     cy.log("LENGTH => "+ary.length)
        //     cy.log(JSON.stringify(ary))
        // })

    })











})