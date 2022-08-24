const Employee = require('../lib/Employee')

describe('name access', () => {
    it('Employees name can be accessed through constructor', ()=>
    {
        const employee= new Employee('foo', '01', 'abc@gmail.com')
        expect(employee.name).toBe('foo') 
    })
})
describe('id access', () => {
    it('Employees id can be accessed through constructor', ()=>
    {
        const employee= new Employee('foo', '01', 'abc@gmail.com')
        expect(employee.id).toBe('01') 
    })
})
describe('email access', () => {
    it('Employees email can be accessed through constructor', ()=>
    {
        const employee= new Employee('foo', '01', 'abc@gmail.com')
        expect(employee.email).toBe('abc@gmail.com') 
    })
})
describe('getName', () => {
    it('Return name of the employee', ()=>
    {
        const employee= new Employee('foo', '01', 'abc@gmail.com')
        expect(employee.getName()).toBe('foo') 
    })
})
describe('getID', () => {
    it('Return Id number of the employee', ()=>
    {
        const employee= new Employee('foo', '01', 'abc@gmail.com')
        expect(employee.getId()).toBe('01') 
    })
})
describe('getEmail', () => {
    it('Return Email of the employee', ()=>
    {
        const employee= new Employee('foo', '01', 'abc@gmail.com')
        expect(employee.getEmail()).toBe('abc@gmail.com') 
    })
})

describe('getRole', () => {
    it('Return the role as Employee', () =>{
        const role = 'Employee';
        const employee= new Employee('foo', '01', 'abc@gmail.com')
        expect(employee.getRole()).toBe('Employee');

    })
})
