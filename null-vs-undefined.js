// let name;

// **no return type
function add(num1, num2) {
  console.log(num1 + num2);
  return;
}

// **undefined Parameter
function add(num1, num2) {
  return num1 + num2;
}

const result = add(13);
console.log(result);

// **Undefined Attribute(undeclared)
const student = { name: "Rashik", phone: "01950958099" };
console.log(student.id);

// **Assigning Undefined itself
let name = undefined;
console.log(name);

// **Missing Index
let ages = [2, 5, 9];
console.log(ages[11]);
