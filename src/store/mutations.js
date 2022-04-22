export default {
  // 购物车详细信息
  addcounter(state, payload) {
    payload.count++
  },
  addtocart(state, payload) {
    payload.checked = true
    state.cartList.push(payload)
  }
}
