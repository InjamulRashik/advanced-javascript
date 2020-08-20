// Var should be avoided
// Let and Const should be used because of Scope
// This is also known as "Waste" (Interview Question)

function sum(first, second) {
  let result = first + second;
  console.log(result);
  return result;
}

const output = sum(3, 7);

console.log(output);
