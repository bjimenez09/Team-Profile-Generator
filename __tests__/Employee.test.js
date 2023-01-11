const Employee = require("../lib/Employee");

test("Creates an new employee object", () => {
    const employeeInstance = new Employee();
    expect(typeof(employeeInstance)).toBe("object");
})

test("", () => {
    const name = "Brandon";
    const employeeInstance = new Employee(name);
    expect(employeeInstance.name).toBe(name);
})

test("Testing ID.", () => {
    const id = 2;
    const employeeInstance = new Employee("Brandon", id);
    expect(employeeInstance.id).toBe(id);
})

test("Testing email.", () => {
    const email = "bjimenezp09@gmail.com";
    const employeeInstance = new Employee("Brandon", 2, email);
    expect(employeeInstance.email).toBe(email);
})



test("Gets name through getName method.", () => {
    const testName = "Brandon";
    const employeeInstance = new Employee(testName);
    expect(employeeInstance.getName()).toBe(testName);
})

test("Can test ID through getID method.", () => {
    const testID = 2;
    const employeeInstance = new Employee("Brandon", testID);
    expect(employeeInstance.getId()).toBe(testID);
})

test("Can test email through getEmail method.", () => {
    const testEmail = "bjimenezp09@gmail.com";
    const employeeInstance = new Employee("Brandon", 2, testEmail);
    expect(employeeInstance.getEmail()).toBe(testEmail);
})

test("Testing role.", () => {
    const returnValue = "Employee";
    const employeeInstance = new Employee("Brandon", 2, "bjimenezp09@gmail.com");
    expect(employeeInstance.getRole()).toBe(returnValue);
})