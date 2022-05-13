// function addUpTo(n) {
//   let total = 0;
//   for (let i = 1; i <= n; i++) {
//     total += i;
//   }
//   return total;
// } 

function addUpTo(n) {
  return n * (n + 1) / 2;
}

// console.log('Add Up To N')
// console.log('------------')
// console.log(addUpTo(6));

let t1 = performance.now();
addUpTo(1000000000);
let t2 = performance.now();
console.log(t1)
console.log(t2)
console.log(`time elapsed: ${(t2 - t1) / 1000} seconds.`)

// First solution is much slower.
// t1  = 102.90000000037253
// t2 = 1043.199999999255
// difference 0.9402999999988824

// Second solution
// t1 = 103.59999999962747
// t2 = 103.59999999962747
// difference 0

module.exports = addUpTo;
