const maxPathSum = require("./124.二叉树中的最大路径和")
const helper = require("./helper")

describe('',() => {
    it("", () => {
        expect(maxPathSum(helper.arrayToTree([-10,9,20,null,null,15,7]))).toEqual(42)
    })
    it("", () => {
        expect(maxPathSum(helper.arrayToTree([-3]))).toEqual(-3)
    })
})