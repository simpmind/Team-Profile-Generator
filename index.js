const inquirer = require("inquirer");
const fs = require('fs');
const Engineer= require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const generateTeam = require("./Assets/src/generateHTML");
const newStaffData= [];

const promptQuestions = async () => {
    const answer = await inquirer.prompt(
 [
    {
        type: 'input',
        name: 'name',
        message: 'Enter your name:',
    },
    {
        type: 'input',
        name: 'id',
        message: 'Enter your ID',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email',
    },
    {
        type: 'list',
        name: 'position',
        message: 'What is your position in the company',
        choices: ['engineer', 'manager', 'intern'],
    }
])

    if(answer.position === 'manager'){
        const response = await inquirer.prompt(
            [
                {
                    type: 'input',
                    name: 'officeNumber',
                    message: 'Enter your office number'
                }
            ]
        )
        
        const newManager = new Manager(answer.name, answer.id, answer.email, response.officeNumber);
        newStaffData.push(newManager)
    ;
    }
    else if(answer.position === 'engineer'){
       const response =  await inquirer.prompt(
            [
                {
                    type: 'input',
                    name: 'github',
                    message: 'Enter your Github username'
                }
            ]
        )
       
       const newEngineer = new Engineer(answer.name, answer.id, answer.email, response.github);
       newStaffData.push(newEngineer);
    }
    else if(answer.position === 'intern'){
        const response = await inquirer.prompt(
            [
                {
                    type: 'input',
                    name: 'school',
                    message: 'Enter your school name'
                }
            ]
        )
       
       const newIntern = new Intern(answer.name, answer.id, answer.email, response.school);
       newStaffData.push(newIntern);
    }

}; 

 async function init() {
        await promptQuestions()
          
        
        const answer = await inquirer.prompt(
        [
            {
                type: 'list',
                name: 'addStaff',
                message: 'Do you want to add more staff',
                choices: ['Yes', 'No']
            }
        ]
    )
    if (answer.addStaff === 'Yes') {
        return init()
      }
      return formTeam();
  }  
  

init();
 const formTeam = () => {
    console.log('new staff', newStaffData);
    console.log('Generating html file ....')
    fs.writeFileSync('./dist/index.html', generateTeam(newStaffData), 'utf-8');
    
 }
