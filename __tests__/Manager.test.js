const Manager = require("../lib/Manager");

test("creates an office number", () => {
    const testOfficeNumber = 2;
    const employeeInstance = new Manager("Brandon", 2, "bjimenezp09@gmail.com", testOfficeNumber);
    expect(employeeInstance.officeNumber).toBe(testOfficeNumber);
});

test("testing officeNumber will return office number.", () => {
    const testOfficeNumber = 2;
    const employeeInstance = new Manager("Brandon", 2, "bjimenezp09@gmail.com", testOfficeNumber);
    expect(employeeInstance.getOfficeNumber()).toBe(testOfficeNumber);
});

test("testing role", () => {
    const returnValue = "Manager";
    const employeeInstance = new Manager("Brandon", 2, "bjimenezp09@gmail.com", 2);
    expect(employeeInstance.getRole()).toBe(returnValue);
});