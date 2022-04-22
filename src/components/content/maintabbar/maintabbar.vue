<template>
  <div>
    <tabbar>
      <tabbaritem path="/home" color="red" bgcolor="pink">
        <template v-slot:text>
          <div>首页</div>
        </template>
      </tabbaritem>

      <tabbaritem path="/category" color="red" bgcolor="pink">
        <template v-slot:text>
          <div>分类</div>
        </template>
      </tabbaritem>

      <tabbaritem path="/cart" color="red" bgcolor="pink">
        <template v-slot:text>
          <div>购物车</div>
        </template>
      </tabbaritem>

      <tabbaritem path="/profile" color="red" bgcolor="pink">
        <template v-slot:text>
          <div>我的</div>
        </template>
      </tabbaritem>
    </tabbar>
  </div>
</template>

<script>
import tabbaritem from "../../common/tabbar/tabbar_item.vue";
import tabbar from "../../common/tabbar/tabbar.vue";
export default {
  components: {
    tabbar,
    tabbaritem,
  },
};
</script>

<style>
</style>
