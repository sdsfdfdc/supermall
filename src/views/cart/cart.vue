<template>
  <div class="cart">
    <navbar>
      <template v-slot:center> 购物车 </template>
    </navbar>

    <cartlist></cartlist>
    <carttotal></carttotal>
  </div>
</template>

<script>
import navbar from "../../components/common/navbar/NavBar.vue";
import carttotal from "./cartcomps/CartTotal.vue";
import cartlist from "./cartcomps/CartList";
export default {
  components: {
    cartlist,
    navbar,
    carttotal,
  },
};
</script>

<style scoped>
.cart {
  height: 100vh;
}
.content3 {
  height: calc(100% - 44px);
}
</style>
