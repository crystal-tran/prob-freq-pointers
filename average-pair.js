// add whatever parameters you deem necessary & write docstring

/** averagePair
 * checks each unique pair in the sortedNums to see if the average
 * of those pairs match the targetAvg. Returns corresponding boolean
*/

function averagePair(nums, targetAvg){ // a better name for nums would be sortedNums
  let left = 0;
  let right = nums.length - 1;

  while (left < right){
    const avg = (nums[left] + nums[right]) / 2;
    if (avg === targetAvg){
      return true;
    } else if (avg < targetAvg){
      left++;
    } else {
      right--;
    }
  }

  return false;
}

// [1,2,3,4,5,6] targetAvg = 4.5

// first 1,6 = 3.5
// if we move the left, 2,6 = 4
// if we move the right, 1,5 = 3