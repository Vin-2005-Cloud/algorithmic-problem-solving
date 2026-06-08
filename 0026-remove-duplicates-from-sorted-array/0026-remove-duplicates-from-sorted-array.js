/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    // the comments i put is base on testcase 1
    if(nums.length === 0) return 0;
    let k = 1 // k is at index one assuming the first element is already unique.
    for (let i=1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[k] = nums[i];
            k++; // move k from k[1] = 1 to k[2] = 2 , The unique elements are stored in k
        }
    }
    return k;
};