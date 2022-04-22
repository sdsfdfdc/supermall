<template>
  <div id="detail_bottom_bar">
    <div class="bottom_left">
      <div class="service">
        <span>客服</span>
      </div>
      <div class="shop">
        <span>店铺</span>
      </div>
      <div class="collect">
        <span>收藏</span>
      </div>
    </div>
    <div class="bottom_right">
      <div class="cart" @click="addToCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    addToCart() {
      this.$emit("addEvent");
    },
  },
};
</script>
<style scoped>
#detail_bottom_bar {
  z-index: 99;
  font-size: 0.65rem;
  display: flex;
  position: fixed;
  background-color: #fff;
  bottom: 0px;
  left: 0;
  right: 0;
  line-height: 3.09rem;
  height: 3.09rem;
  text-align: center;
  box-shadow: 0 -0.04rem 0.4rem gray;
}
.bottom_left {
  display: flex;
  flex: 1;
}
.bottom_left > div {
  flex: 1;
  border-right: 0.04rem solid rgba(128, 128, 128, 0.2);
}

.bottom_right {
  display: flex;

  flex: 1;
}
.bottom_right > div {
  flex: 1;
  height: 100%;
  align-items: center;
  line-height: 2.09rem;
}
.cart {
  background-color: rgb(255, 174, 0);
}
.buy {
  background-color: var(--color-tint);
  color: white;
}
</style>
