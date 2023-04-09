const sortedArrayToBST = require("./108.将有序数组转换为二叉搜索树");
const { arrayToTree } = require("./helper");

describe("two sum", () => {
  it("normal check", () => {
    const l1 = sortedArrayToBST([-10,-3,0,5,9]);
    expect(l1).toEqual(arrayToTree([0,-3,9,-10,null,5]));
  });
});
