<template>
  <navbar>
    <template v-slot:left>
      <div class="img" @click="backclick">
        <img src="~assets/images/common/back.svg" alt="" />
      </div>
    </template>
    <template v-slot:center>
      <div class="title">
        <div
          v-for="(item, index) in title"
          :key="index"
          class="title-item"
          :class="{ active: index === currentIndex }"
          @click="titleClick(index)"
        >
          {{ item }}
        </div>
      </div>
    </template>
  </navbar>
</template>

<script>
import navbar from "components/common/navbar/NavBar.vue";
export default {
  components: {
    navbar,
  },
  data() {
    return {
      title: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  methods: {
    titleClick(i) {
      this.currentIndex = i;
      this.$emit("titleClick", i);
    },
    backclick() {
      this.$router.push("/home");
    },
  },
};
</script>

<style scoped>
.title {
  display: flex;
}
.title-item {
  flex: 1;
  font-size: 13px;
}
.nav-bar {
  text-align: center;

  display: flex;
  color: #444444;
  font-weight: 700;
  font-size: 24px;
  line-height: 44px;
  height: 44px;
  background-color: white;
  box-shadow: 0px 0px 4px -1px black;
}
.active {
  color: royalblue;
}
.img img {
  vertical-align: middle;
}
</style>
