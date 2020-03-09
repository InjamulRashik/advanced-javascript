// still not clear

function add(num1, num2) {
  console.log([...arguments]);
  let sum = 0;
  const array = [...arguments];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    const value = sum + element;
    return value;
  }
}
const result = add(2, 3, 5, 7);
const result2 = value(2, 3, 5, 7);
console.log(result2);
