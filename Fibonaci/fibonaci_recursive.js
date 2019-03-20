function fib(n) {
  if(n <= 2) return 1;
  return fib(n-1) + fib(n-2);
}

fib(6);

// BAD SOLUTION
// SPACE COMPLEXITY = 
// TIME COMPLEXITY  = O(2^n)

//                                        fib(6)

//                        fib(5)                         fib(4)

//              fib(4)            fib(3)          fib(3)         fib(2)

//          fib(3) fib(2)      fib(2) fib(1)   fib(2) fib(1)

//      fib(2) fib(1)

// 
           
