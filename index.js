const employee = {name: 'Sam'};

//create a function 
//returns a new object with a new value
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee,
        [key]: value
    };
}
updateEmployeeWithKeyAndValue(employee, 'streetAddress', '11 Broadway');

//create a function
//updates the original object with a new value
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

//create a function
//returns a clone
//does not modify the original employee

function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = {...employee};
    delete newEmployee[key];
    return newEmployee;
}

//create a function
//modifies the original employee

let newEmployee = destructivelyDeleteFromEmployeeByKey(employee, 'name');
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}
