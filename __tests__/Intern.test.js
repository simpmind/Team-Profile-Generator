const Intern = require('../lib/Intern');

describe('constructor', () => {
    it('school can be accessed through constructor', ()=>
    {
        const employee= new Intern('foo', '01', 'abc@gmail.com', 'bar')
        expect(employee.school).toBe('bar') 
    })
})
describe('getRole', () => {
    it('Return the role as Intern', () =>{
        const employee= new Intern('foo', '01', 'abc@gmail.com', 'bar')
        expect(employee.getRole()).toBe('Intern');

    })
})
describe('getSchool', () =>{
    it('Return the school name of Intern', () => {
        const username = 'bar';
        const employee = new Intern('foo', '01', 'abc@gmail.com', username)
        expect(employee.getSchool()).toBe('bar')
    })
})