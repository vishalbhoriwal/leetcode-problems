// url : https://leetcode.com/problems/merge-intervals/description/
// Input: intervals = [[1, 3], [2, 6], [8, 10], [15, 18]]
// Output: [[1,6],[8,10],[15,18]]

let input = [[2, 6], [1, 3], [8, 10], [15, 18]];
var merge = function (intervals = []) {
  intervals.sort((a, b) => a[0] - b[0]);
  let temp = intervals[0];
  let ans = [];
  if (intervals.length === 0) {
    return [];
  }
  for (let i = 0; i < intervals.length; i++) {
    if (intervals[i][0] <= temp[1]) {
      temp[1] = Math.max(temp[1], intervals[i][1]);
    } else {
      ans.push(temp);
      temp = intervals[i];
    }
  }
  ans.push(temp);
  return ans;
};

console.log(merge(input));
