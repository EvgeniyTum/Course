function fib(n) {
  if (n < 1 || typeof(n) !== 'number') {
    return '';
  }
  let result = [];
  for (let i = 1; i <= n; i++) {
    if (i < 3) {
      result.push(i - 1);
    } else {
      result.push(result[i - 3] + result[i - 2]);
    }
  }
  return result.join(' ');
}

console.log(fib(0));
console.log(fib(1));
console.log(fib(2));
console.log(fib(3));
console.log(fib(4));
console.log(fib(5));
console.log(fib(10));