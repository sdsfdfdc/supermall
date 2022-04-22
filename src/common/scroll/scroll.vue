<template>
  <div class="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BetterSCroll from "better-scroll"; //滚动组件
export default {
  props: {
    probe: {
      type: Number,
      default: 3,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      scroll: null,
    };
  },
  methods: {
    finishPullUp() {
      this.scroll.finishPullUp();
    },
  },
  mounted() {
    this.scroll = new BetterSCroll(document.querySelector(".wrapper"), {
      probeType: this.probe,
      pullUpLoad: this.pullUpLoad,
      click: true,
    });
    this.scroll.on("scroll", (position) => {
      this.$emit("scroll", position);
    });
    this.scroll.on("pullingUp", () => {
      this.$emit("pullingUp");
    });
  },
};
</script>

<style>
</style>
