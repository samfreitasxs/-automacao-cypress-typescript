describe('Write/read data to JSON', () => { 
    it('should write data into JSON', () => {
        cy.writeFile('log.json', {name: "Dan", age: 28})
    })
 })