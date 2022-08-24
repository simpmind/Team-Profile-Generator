const Manager = require('../lib/Manager')
describe('constructor', () => {
    it('oficce number can be accessed through constructor', ()=>
    {
        const employee= new Manager('foo', '01', 'abc@gmail.com', 'bar')
        expect(employee.officeNumber).toBe('bar') 
    })
})
describe('getRole', () => {
    it('Return the role as Manager', () =>{
        const employee= new Manager('foo', '01', 'abc@gmail.com', 'bar')
        expect(employee.getRole()).toBe('Manager');

    })
})
describe('getGithub', () =>{
    it('Return the office number of the Manager',() => {
        const office = 'bar';
        const employee = new Manager('foo', '01', 'abc@gmail.com', office)
        expect(employee.getOfficeNumber()).toBe('bar')
    })
})