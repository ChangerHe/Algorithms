class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

module.exports = {
  arrayToChain: (arr) => {
    if (!arr.length) {
      return null;
    }
    const chain = {
      val: null,
      next: null,
    };
    arr.reduce((p, c) => {
      if (p.val === null) {
        p.val = c;
        return p;
      } else {
        p.next = {
          val: c,
          next: null,
        };
        return p.next;
      }
    }, chain);
    return chain;
  },
  arrayToTree(arr) {
    const len = arr.length
    const genNode = (pos) => {
      const posL = pos * 2
      const posR = posL + 1
      const l = posL > len ? null : genNode(posL)
      const r = posR > len ? null : genNode(posR)
      return new TreeNode(arr[pos - 1], l, r)
    }
    return genNode(1);
  },
  ListNode,
  TreeNode,
};
