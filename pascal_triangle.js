// url: https://leetcode.com/problems/pascals-triangle/description/
// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

var generate = function (numRows) {
  const result = [];
  for (let i = 0; i < numRows; i++) {
    let rows = new Array(i + 1).fill(1);
    for (let j = 1; j < i; j++) {
      console.log(i, result, result[i - 1][j], result[i - 1][j - 1], 'hehe');
      rows[j] = result[i - 1][j] + result[i - 1][j - 1];
    }
    result.push(rows);
  }
  return result;
};

console.log(generate(5))