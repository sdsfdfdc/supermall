<template>
  <div id="cateright">
    <scroll class="content2" ref="scroll">
      <div class="cateright">
        <div
          class="caterightItem"
          v-for="(item, index) in rightList"
          :key="index"
        >
          <a :href="item.link"
            ><img :src="item.image" @load="imgLoad" alt=""
          /></a>
        </div>
      </div>
    </scroll>
  </div>
</template>

<script>
import scroll from "../../../common/scroll/scroll.vue";
export default {
  components: {
    scroll,
  },
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    imgLoad() {
      this.count++;
      if (this.count >= this.rightList.length) {
        this.$refs.scroll.scroll.refresh();
        this.count = 0;
      }
    },
  },
  props: {
    rightList: {
      type: Array,
    },
  },
};
</script>

<style scoped>
#cateright {
  height: 100vh;
}
.content2 {
  height: calc(100% - 49px);
}
.cateright {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.caterightItem {
  border: 2px solid #b8b8b8;
  width: 45%;
}
.cateright img {
  width: 100%;
}
</style>
