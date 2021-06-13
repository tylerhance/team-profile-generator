// Import the constructor from Employee
const Employee = require('./Employee');

// Extending employee constructor for Manager
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super (name, id, email);

        this.officeNumber = officeNumber;
    }

    // makes employee = manager
    getRole(){
        return "Manager";
    }
}

module.exports = Manager;