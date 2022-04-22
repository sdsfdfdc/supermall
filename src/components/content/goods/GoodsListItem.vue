<template>
  <div class="goodsitem" @click="itemclick">
    <a> <img v-lazy="goodsItem.show.img" :key="goodsItem.show.img" alt="" /></a>
    <div class="goods-info">
      <p>{{ goodsItem.title }}</p>
      <span class="price">{{ goodsItem.price }}</span>
      <span class="cfav">{{ goodsItem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    itemclick() {
      this.$router.push("/detail/" + this.goodsItem.iid);
    },
  },
  props: {
    goodsItem: {
      type: Object,
    },
  },
};
</script>

<style>
.goodsitem {
  position: relative;
  text-align: center;
  width: 45%;
  /*用来保证上下之间的距离*/
  padding-bottom: 40px;
}
.goodsitem img {
  width: 100%;
  height: 100%;
  /*圆角*/
  border-radius: 9px;
}
.goods-info {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}
.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}
.goods-info .price {
  color: var(--color-high-text);
  margin-right: 20px;
}

.goods-info .cfav {
  position: relative;
}
.goods-info .cfav::before {
  content: "";
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url("~@/assets/images/common/collect.svg") 0 0/14px 14px;
}
</style>
