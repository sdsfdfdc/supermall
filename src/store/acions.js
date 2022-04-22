export default {
  addcart(context, payload) {
    return new Promise((resolve, reject) => {
      let product = context.state.cartList.find(item => item.iid === payload.iid)
      if (product) {
        context.commit('addcounter', product)
        resolve("商品数量加1")

      } else {

        payload.count = 1
        context.commit('addtocart', payload)
        resolve('添加了新商品')

      }
    })


  }
}
