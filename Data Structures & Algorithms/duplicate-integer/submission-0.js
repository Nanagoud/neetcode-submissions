class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        if(!nums.length) return false;
        const arraySet = new Set();
        for(let i =0; i <= nums.length; i++) {
            if(arraySet.has(nums[i])) {
                return true;
            }
            arraySet.add(nums[i])
        }
        return false;
    }
}
