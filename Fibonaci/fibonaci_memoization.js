function fib(n, memo=[]) {
  if(memo[n] !== undefined) return memo[n];
  if(n <=2 ) return 1;
  var res = fib(n-1, memo) + fib(n-2, memo);
  memo[n] = res;
  console.log("RES IS:", res);
  return res;
}

fib(10);


// SPACE COMPLEXITY
// TIME COMPLEXITY