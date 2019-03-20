function fib(n) {
  if(n <= 2) return 1;
  var sequence = [0,1,1];
  for(var i = 3; i <= n; i++) {
    sequence[i] = sequence[i-1] + sequence[i-2];
  }
  console.log(sequence);
  return sequence[n];
}

fib(6);

// TIME COMPLEXITY - O(N)