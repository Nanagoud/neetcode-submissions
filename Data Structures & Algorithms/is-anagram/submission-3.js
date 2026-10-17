class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;
      const countMaps = new Map()
      for(const char of s) {
          countMaps.set(char, (countMaps.get(char) || 0) +1 )
      }
      for(const char of t) {
        if(!countMaps.get(char) || countMaps.get(char) === 0) return false;
        countMaps.set(char, (countMaps.get(char) - 1) || 0)
      }
      return true
    }
}