const numbs = [1, 2, 3, 4, 5, 6, 7, 8];
//const part = numbs.slice(2, 5);

const removed = numbs.splice(2, 5, 100);

// console.log(removed);
// console.log(numbs);

const together = numbs.join(" ");
console.log(together);
