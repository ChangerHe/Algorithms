module.exports = {
  arrayToChain: (arr) => {
    if (!arr.length) {
      return null
    }
    const chain = {
      val: null,
      next: null,
    }
    arr.reduce((p, c) => {
      if (p.val === null) {
        p.val = c
        return p
      } else {
        p.next = {
          val: c,
          next: null
        }
        return p.next
      }
    }, chain)
    return chain
  },
  ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}