<template>
  <div id="cart_list">
    <scroll ref="scroll" class="cart_scroll">
      <template>
        <cart-list-item
          v-for="(item, index) in $store.state.cartList"
          :key="index"
          :item="item"
        ></cart-list-item>
      </template>
    </scroll>
  </div>
</template>
<script>
import Scroll from "../../../common/scroll/scroll.vue";

import CartListItem from "./CartListItem.vue";

export default {
  components: {
    Scroll,
    CartListItem,
  },
  methods: {},
  activated() {
    this.$refs.scroll.scroll.refresh();
  },
};
</script>
<style scoped>
#cart_list {
  font-size: 0.68rem;
  height: calc(100vh - 1.9rem - 2.09rem - 1.9rem);
}

/**
* scroll
*/
.cart_scroll {
  height: 100%;
  overflow: hidden;
}
</style>
