// url: https://leetcode.com/problems/majority-element/description/
// Input: nums = [3,2,3]
// Output: 3

var majorityElement = function (nums) { 
  let element = nums[0];
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (count === 0) {
      element = nums[i];
      count = 1;
    }
    else if (element === nums[i]) {
      count++;
    } else {
      count--;
    }
  }
  return element;
}


console.log(majorityElement([3, 2, 3]));
