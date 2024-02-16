// url: https://leetcode.com/problems/unique-paths/description/
// Input: m = 3, n = 7
// Output: 28

// we caclculate sum from right bottom to top left and in row [0] we'll get our answer

var uniquePaths = function(m, n) {
  let row = new Array(n).fill(1);

  for (let i = 1; i < m; i++) {
    for (let j = n - 2; j >= 0; j--) {
      row[j] = row[j] + row[j + 1];
      console.log(row + '-->' + j);
    }
  }

  // console.log(row);
  
  return row[0];
};

console.log(uniquePaths(3, 7)); // Output: 28
