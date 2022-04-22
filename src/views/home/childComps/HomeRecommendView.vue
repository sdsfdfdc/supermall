<template>
  <!-- 推荐信息 -->
  <div class="recommend">
    <div
      class="recommend-child"
      v-for="(item, index) in recommends"
      :key="index"
    >
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style>
.recommend {
  display: flex;
  border-bottom: 10px #eee solid;
  text-align: center;
}
.recommend-child {
  flex: 1;
}
.recommend-child img {
  width: 80%;
}
</style>
