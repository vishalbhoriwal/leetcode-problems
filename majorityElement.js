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
    } else if (element === nums[i]) {
      count++;
    } else {
      count--;
    }
  }
  return element;
};

// url: https://leetcode.com/problems/majority-element-ii/
// console.log(majorityElement([3, 2, 3]));
let input = [7, 7, 7, 3, 4, 4, 4, 5];
// let output = [4, 7]
var majorityElement2 = function (nums) {
  let element1, element2;
  let count1 = 0, count2 = 0;
  for (let num of nums) {
    if (num === element1) {
      count1++;
    } else if (num === element2) {
      count2++;
    } else if (count1 === 0) {
      count1 = 1;
      element1 = num;
    } else if (count2 === 0) {
      count2 = 1;
      element2 = num;
    } else {
      count1--;
      count2--;
    }
  }

  count1 = count2 = 0;
  for (let num of nums) {
    console.log(num)
    if (num === element1) {
      count1+= 1;
    } else if (num === element2) {
      count2+= 1;
    }
  }

  let result = [];
  if (count1 > nums.length / 3) {
    result.push(element1)
  }

  if (count2 > nums.length / 3) {
    result.push(element2)
  }

  return result;
};

console.log(majorityElement2(input)); 
