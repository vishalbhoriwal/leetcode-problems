// url: https://leetcode.com/problems/sort-colors/description/
// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]

// dutch national algorithm
let arr = [2, 0, 2, 1, 1, 0];
var sortColors = function (nums) {
  let l = 0;
  let m = 0;
  let h = nums.length - 1;
  while (m <= h) {
    if (nums[m] === 0) {
      [nums[l], nums[m]] = [nums[m], nums[l]];
      l++;
      m++;
    } else if (nums[m] === 1) {
      m++;
    } else {
      [nums[h], nums[m]] = [nums[m], nums[h]];
      h--;
    }
  }
  return nums;
};

console.log(sortColors(arr));
