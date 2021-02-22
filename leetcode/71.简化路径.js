/*
 * @lc app=leetcode.cn id=71 lang=javascript
 *
 * [71] 简化路径
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  const splitPath = path.split("/");
  return (
    "/" +
    splitPath
      .reduce((p, c, i) => {
        if (c === "..") {
          p.pop();
          return p;
        } else if (c === "." || !c) {
          return p;
        } else {
          return [...p, c];
        }
        return p;
      }, [])
      .join("/")
  );
};
// @lc code=end
