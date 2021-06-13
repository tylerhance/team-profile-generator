// Import the constructor from Employee
const Employee = require('./Employee');

// Extending employee constructor for engineer
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super (name, id, email);

        this.github = github;
    }

    // returns github data from user
    getGithub(){
        return this.github;
    }

    // turns employee role to engineer
    getRole(){
        return "Engineer";
    }
}

module.exports = Engineer;