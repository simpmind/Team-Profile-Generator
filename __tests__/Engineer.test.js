const Engineer = require('../lib/Engineer');


describe('constructor', () => {
    it('github username can be accessed through constructor', ()=>
    {
        const employee= new Engineer('foo', '01', 'abc@gmail.com', 'bar')
        expect(employee.github).toBe('bar') 
    })
})
describe('getRole', () => {
    it('Return the role as engineer', () =>{
        const role = 'Engineer';
        const employee= new Engineer('foo', '01', 'abc@gmail.com', 'bar')
        expect(employee.getRole()).toBe('Engineer');

    })
})
describe('getGithub', () =>{
    it('Return the github username of the engineer',() => {
        const username = 'bar';
        const employee = new Engineer('foo', '01', 'abc@gmail.com', username)
        expect(employee.getGithub()).toBe('bar')
    })
})