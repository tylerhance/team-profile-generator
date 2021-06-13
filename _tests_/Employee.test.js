const Employee = require('../lib/Employee');


test("Creates an employee object", () => {
    const employee = new Employee('Tyler', 1, 'tyler.hance@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));  
});

// Test for getting the getName()
test('test for getting employee name', () => {
    const employee = new Employee('Tyler', 1, 'tyler.hance@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

// Gets the getId()
test('gets the employee ID', () => {
    const employee = new Employee('Tyler', 1, 'tyler.hance@gmail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

// Get email from getEmail()
test('gets employee email', () => {
    const employee = new Employee('Tyler', 1, 'tyler.hance@gmail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

// Gets role from getRole()
test('gets the role of employee', () => {
    const employee = new Employee('Tyler', 1, 'tyler.hance@gmail.com');

    expect(employee.getRole()).toEqual('Employee');
});