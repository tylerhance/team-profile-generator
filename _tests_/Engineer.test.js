const Engineer = require('../lib/Engineer');

// testing for creating the engineer object
test('creates engineer object', () => {
    const engineer = new Engineer("Tyler", 2, 'tyler.hance@gmail.com', 'tylerhance');

    expect(engineer.github).toEqual(expect.any(String));
});

// testing getGithub()
test('gets engineer github data', () => {
    const engineer = new Engineer("Tyler", 2, 'tyler.hance@gmail.com', 'tylerhance');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

// tests getRole()
test('gets the role of employee', () => {
    const engineer = new Engineer("Tyler", 1, 'tyler.hance@gmail.com', 'tylerhance');

    expect(engineer.getRole()).toEqual('Engineer');
});