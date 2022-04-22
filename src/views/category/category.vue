<template>
  <div id="category">
    <catesidebar
      @rightevent="rightevent"
      class="left"
      :list="list"
    ></catesidebar>

    <caterightbar
      class="right"
      :rightList="rightList"
      :leftList="list"
    ></caterightbar>
  </div>
</template>

<script>
import caterightbar from "./cateComps/caterightbar.vue";
import catesidebar from "./cateComps/catesidebar.vue";

import {
  getCateGory,
  getCateGoryMaitKey,
} from "../../network/category/Category";
export default {
  name: "category",
  components: {
    catesidebar,
    caterightbar,
  },
  data() {
    return {
      list: [],
      rightList: null,

      num: "3627",
    };
  },
  created() {
    getCateGory().then((res) => {
      this.list.push(...res.data.data.category.list);
    });
    getCateGoryMaitKey(this.num).then((res) => {
      this.rightList = res.data.data.list;
    });
  },

  methods: {
    rightevent(i) {
      this.num = this.list[i].maitKey;

      getCateGoryMaitKey(this.num).then((res) => {
        this.rightList = res.data.data.list;
      });
    },
  },
};
</script>

<style scoped>
#category {
  display: flex;
}

.left {
  z-index: 2;
  position: relative;
  left: 0px;
  top: 0px;
  bottom: 0px;
  flex: 1;
}
.right {
  padding-bottom: 49px;
  flex: 3;
}
</style>
