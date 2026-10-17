class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        if(nums.length <= 1) return [-1, -1];
        const visited = new Map();
        for(let i = 0; i < nums.length; i++) {
            const diff = target - nums[i];
            if(visited.has(diff)) {
                return [i, visited.get(diff)]
            }
            visited.set(nums[i], i);
        }
        return [-1, -1]
    }
}
