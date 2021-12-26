let a = 2, b = 5;
let N = 7;
let findNthTerm = (first, second, num) => {
   let diff = second - first;
   let fact = (num - 1) * diff;
   let term = first + fact;
   return term;
};
console.log(findNthTerm(a, b, N));