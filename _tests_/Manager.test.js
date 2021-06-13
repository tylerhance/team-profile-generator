const Manager = require('../lib/Manager');

// creates manager object
test('create manager object', () => {
    const manager = new Manager('Tyler', 4, 'tyler.hance@gmail.com', 10);

    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// tests manager getRole()
test('gets role of employee', () => {
    const manager = new Manager('Tyler', 4, 'tyler.hance@gmail.com', 10);

    expect(manager.getRole()).toEqual('Manager');
});