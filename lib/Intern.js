// Import the constructor from Employee
const Employee = require('./Employee');

// Extending employee constructor for intern
class Intern extends Employee {
    constructor (name, id, email, school) {
        super (name, id, email);

        this.school = school;
    }

    // returns {school from user
    getSchool(){
        return this.school;
    }

    // makes employee = intern
    getRole(){
        return "Intern";
    }
}

module.exports = Intern;