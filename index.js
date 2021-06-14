const inquirer = require("inquirer");
const fs = require('fs');
const generateHTML = require('./src/generateHTML');

// All team profiles
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// empty team array
const teamArray = [];

// Prompts for generating 'Manager'
const addManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'Who is the manager?',

        },
        {
            type: 'input',
            name: 'id',
            message: "What is the manager's ID?",
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the manager's email?",
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the manager's office number?",
        },

    ])
    .then(managerInput => (){
        const { name, id, email, officeNumber } = managerInput;
        const manager = new Manager (name, id , email, officeNumber);

        teamArray.push(manager);
        console.log(manager);
    });
};

const addEmployee = () => {
    console.log(`Adding employees to team.`);

    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: "Please choose the employee's role",
            choices: ['Engineer', 'Intern']
        },
    ]);
};