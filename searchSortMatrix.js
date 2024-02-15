// https://leetcode.com/problems/search-a-2d-matrix/description/
// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
// Output: true

var searchMatrix = function (matrix, target) {
  let i = 0;
  let n = matrix.length;
  let j = matrix[0].length - 1;
  while (i < n && j >= 0) {
    if (matrix[i][j] === target) {
      return true;
    } else if (matrix[i][j] > target) {
      j--;
    } else {
      i++;
    }
  }
  return false;
};

console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    161
  )
);

// 1  3  5  7
// 10 11 16 20
// 23 30 34 60
