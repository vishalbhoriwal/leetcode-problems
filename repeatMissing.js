// url: https://www.interviewbit.com/problems/repeat-and-missing-number-array/
// Input:[3 1 2 5 3] 

// Output:[3, 4] 


const repeatedNumber = function (A) {
  const n = A.length;
  const sum = (n * (n + 1)) / 2;
  const arraySum = A.reduce((s, val) => s + val);
  console.log(sum, arraySum);
}

repeatedNumber([3, 1, 2, 5, 3])
