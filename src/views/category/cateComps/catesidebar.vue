<template>
  <div id="catesidebar">
    <div class="left">
      <div
        :class="{ change: currentIndex === index }"
        @click="cateClick(index)"
        v-for="(item, index) in list"
        :key="index"
        class="categortBox"
      >
        <span>{{ item.title }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0,
    };
  },
  props: {
    list: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    cateClick(i) {
      this.currentIndex = i;
      this.$emit("rightevent", i);
    },
  },
};
</script>

<style>
.left {
  height: calc(100% - 49px);
  position: fixed;

  top: 0px;
  left: 0px;
  bottom: 0px;
}
.categortBox {
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 6.25%;

  background-color: #efefef;
}
.change {
  font-size: 16px;
  background-color: white;
  border-left: 4px solid palevioletred;
}
</style>
