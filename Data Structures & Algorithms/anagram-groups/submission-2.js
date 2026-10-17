
class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        if (!strs.length) return [];

        const anagramsMap = new Map();

        for (let i = 0; i < strs.length; i++) {
            const sorted = strs[i].split('').sort().join('');

            if (anagramsMap.has(sorted)) {
                anagramsMap.get(sorted).push(strs[i]);
            } else {
                anagramsMap.set(sorted, [strs[i]]);
            }
        }

        return [...anagramsMap.values()];
    }
}
