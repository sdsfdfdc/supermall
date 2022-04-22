<template>
  <div class="tab-bar-item" @click="itemclick">
    <div :style="activeStyle"><slot name="text"></slot></div>
  </div>
</template>

<script>
export default {
  props: {
    path: {
      type: String,
    },
    color: {
      type: String,
    },
    bgcolor: {
      type: String,
    },
  },
  computed: {
    isActive() {
      return this.$route.path === this.path;
    },
    activeStyle() {
      return this.isActive
        ? { color: this.color, backgroundColor: this.bgcolor }
        : "";
    },
  },
  methods: {
    itemclick() {
      this.$router.push(this.path);
    },
  },
};
</script>

<style>
.tab-bar-item {
  flex: 1;
  height: 49px;
  line-height: 49px;
  font-size: 20px;
  font-weight: 700;
}
</style>
