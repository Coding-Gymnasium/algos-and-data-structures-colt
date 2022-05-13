function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}
console.log('Add Up To N')
console.log('------------')
console.log(addUpTo(6));

module.exports = addUpTo;
