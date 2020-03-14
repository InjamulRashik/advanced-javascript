//*** closer is type of attribute of a function where
//the function can return another function
//can not declare or call outside the scope

function stopWatch() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}

const clock1 = stopWatch();
console.log(clock1());
console.log(clock1());
const clock2 = stopWatch();
console.log(clock2());
console.log(clock2());
console.log(clock1());
