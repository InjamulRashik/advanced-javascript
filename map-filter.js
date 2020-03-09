// **Quick Facts
// ** Map returns Array
// ** Filter returns Array
// ** Find returns Array

const numbers = [3, 4, 5, 6, 7, 8];
// // const output = [];
// // for (let i = 0; i < numbers.length; i++) {
// //   const element = numbers[i];
// //   const result = element * element;
// //   output.push(result);
// // }

// function square(element) {
//   return element;
// }

// const result = numbers.map(function test(element) {
//   console.log(element);
// });

// //console.log(result);

const bigger = numbers.filter(x => x > 5); // filter shows/returns an array

const biggerFind = numbers.find(x => x > 5); // find shows/returns an element of an array

console.log(biggerFind);
