/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let k = 0;
for (let j=0; j < nums.length; j++) {
    if (nums[j] !== val ) {
        [nums[k], nums[j]] = [nums[j], nums[k]];    // swapping
        k++;
    }
}
return k;
};