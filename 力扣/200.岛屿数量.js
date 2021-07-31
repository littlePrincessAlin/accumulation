/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  let count = 0;

  const dfs = (x, y) => {
    if (x < 0 || y < 0 || x >= m || y >= n) {
      return;
    }
    if (grid[x][y] === "0") {
      return;
    }

    grid[x][y] = "0";
    dfs(x + 1, y);
    dfs(x - 1, y);
    dfs(x, y + 1);
    dfs(x, y - 1);
  };

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === "1") {
        dfs(i, j);
        count++;
      }
    }
  }

  return count;
};
// @lc code=end
