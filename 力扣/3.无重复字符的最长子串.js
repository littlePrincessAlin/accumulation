/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (!s.length) {
    return 0;
  }

  const set = new Set();
  let maxLength = 0;
  let j = 0;

  for (let i = 0; i < s.length; i++) {
    if (set.has(s[i])) {
      while (set.has(s[i])) {
        set.delete(s[j]);
        j++;
      }
      set.add(s[i]);
    } else {
      set.add(s[i]);
      maxLength = Math.max(maxLength, set.size);
    }
  }

  return maxLength;
};
// @lc code=end
