<template>
  <div>
    <swiper class="swiper">
      <swiperitem v-for="(item, index) in topimages" :key="index">
        <img :src="item" alt="" />
      </swiperitem>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperitem } from "@/components/common/swiper/index.js";

export default {
  props: {
    topimages: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    swiper,
    swiperitem,
  },
};
</script>

<style>
.swiper {
  height: 300px;
  overflow: hidden;
}
</style>
