const Engineer = require("../lib/Engineer");

test("Can create a github.", () => {
    const testGithub = "bjimenez09";
    const employeeInstance = new Engineer("Brandon", 2, "bjimenezp09@gmail.com", testGithub);
    expect(employeeInstance.github).toBe(testGithub);
});

test("Testing getGithub will return github.", () => {
    const testGithub = "bjimenez09";
    const employeeInstance = new Engineer("Brandon", 2, "bjimenezp09@gmail.com", testGithub);
    expect(employeeInstance.getGithub()).toBe(testGithub);
});

test("Testing role.", () => {
    const returnValue = "Engineer";
    const employeeInstance = new Engineer("Brandon", 2, "bjimenezp09@gmail.com", "bjimenez09");
    expect(employeeInstance.getRole()).toBe(returnValue);
});