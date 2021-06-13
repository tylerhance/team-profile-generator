const Intern = require('../lib/Intern');

// creating intern object
test('creates the intern object', () => {
    const intern = new Intern('Tyler', 3, 'tyler.hance@gmail.com', 'UW');

    expect(intern.school).toEqual(expect.any(String));
});

// tests getSchool()
test('gets employees school', () => {
    const intern = new Intern('Tyler', 3, 'tyler.hance@gmail.com', 'UW');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// test for intern getRole()
test('gets role of employess', () => {
    const intern = new Intern('Tyler', 3, 'tyler.hance@gmail.com', 'UW');

    expect(intern.getRole()).toEqual('Intern');
});