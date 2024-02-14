// url : https://leetcode.com/problems/set-matrix-zeroes/description/
// Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
// Output: [[1,0,1],[0,0,0],[1,0,1]]


var setZeroes = function (matrix) {
  let rows = [], cols = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        rows.push(i);
        cols.push(j);
      }
    }
  }
  for (let i = 0; i < rows.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      matrix[rows[i]][j] = 0;
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < cols.length; j++) {
      matrix[i][cols[j]] = 0;
    }
  }
  return matrix;
};

console.log(setZeroes([[1,1,1],[1,0,1],[1,1,1]]))
