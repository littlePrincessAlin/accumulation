/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  if (!s) return false;
  s = s.replace(/[\W_]/g, "");
  const stringFormat = s.trim().toLowerCase();

  const stringArr = stringFormat.split("");
  const olsStrArr = stringFormat.split("").reverse();

  if (stringArr.join("") === olsStrArr.join("")) {
    return true;
  } else {
    return false;
  }
};
// @lc code=end
