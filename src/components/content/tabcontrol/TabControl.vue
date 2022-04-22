<template>
  <div class="tabcontrol">
    <div
      @click="btnclick(index)"
      v-for="(item, index) in title"
      :key="index"
      class="tab-control-item"
      :class="{ active: index === currentIndex }"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    btnclick(i) {
      this.currentIndex = i;
      this.$emit("tabclick", i);
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
};
</script>

<style>
.tabcontrol {
  background-color: #fff;
  display: flex;
  justify-content: space-around;
  position: sticky;
  top: 44px;
  z-index: 998;
}
.tab-control-item {
  height: 40px;
  line-height: 44px;
  font-size: 15px;
}
.active {
  color: rgb(233, 77, 103);
  border-bottom: rgb(233, 77, 103) 3px solid;
}
</style>
