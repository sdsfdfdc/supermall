<template>
  <!-- 轮播图 -->
  <swiper>
    <swiperitem v-for="(item, index) in Hbanners" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="" />
      </a>
    </swiperitem>
  </swiper>
</template>

<script>
import { swiper, swiperitem } from "@/components/common/swiper/index.js";
export default {
  props: {
    Hbanners: {
      type: Array,
      require: true,
    },
  },
  components: {
    swiper,
    swiperitem,
  },
};
</script>

<style>
</style>
