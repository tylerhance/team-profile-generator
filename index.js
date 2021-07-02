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
    .then(managerInput => {
        const { name, id, email, officeNumber } = managerInput;
        const manager = new Manager (name, id , email, officeNumber);

        teamArray.push(manager);
        console.log(manager);
    });
};

const addEmployee = () => {
    console.log(`----- Adding employees to team. -----`);

    return inquirer.prompt ([
        {
            type: "list",
            name: "role",
            message: "Please choose the employee's role",
            choices: ["Engineer", "Intern"]
        },
        {
            type: "input",
            name: "name",
            message: "What's the name of the employee?",
        },
        {
            type: "input",
            name: "id",
            message: "Please enter the employee's ID.",
        },
        {
            type: "input",
            name: "email",
            message: "Please enter the employee's email.",
        },
        {
            type: "input",
            name: "github",
            message: "Please enter the employee's github username.",
            when: (input) => input.role === "Engineer"
        },
        {
            type: "input",
            name: "school",
            message: "Please enter the intern's school.",
            when: (input) => input.role === "Intern"
        },
        {
            type: "confirm",
            name: "confirmAddEmployee",
            message: "Would you like to add more team members?",
            default: false
        },
    ])

    // data for all the employee types
    .then(employeeData => {
        let { name, id, email, role, github, school, confirmAddEmployee } = employeeData;
        let employee;

        if(role === "Engineer") {
            employee = new Engineer (name, id, email, github);
            console.log(employee);
        }else if(role === "Intern") {
            employee = new Intern (name, id, email, school);
            console.log(employee);
        }

        teamArray.push(employee);

        if (confirmAddEmployee) {
            return addEmployee(teamArray);
        }else {
            return teamArray;
        }
    })
};

// Function to generate HTML using fs
const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        if(err) {
            console.log(err);
            return;
        }else {
            console.log("Your team has been successfully created! Refer to the index.html to check it out!")
        }
    })
};

addManager()
    .then(addEmployee)
    .then(teamArray => {
        return generateHTML(teamArray);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    }) .catch(err => {
        console.log(err);
    })