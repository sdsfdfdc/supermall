<template>
  <div id="detail2">
    <tabbar @titleClick="titleClick" ref="nav" class="banner"></tabbar>
    <scroll class="content" ref="scroll" @scroll="contentScroll">
      <detailswiper :topimages="topimages"></detailswiper>
      <detailbaseinfo :goods="goods"></detailbaseinfo>
      <detailgoodsinfo
        @imageload="aaa"
        :detailinfo="detailInfo"
        ref="recommed"
      ></detailgoodsinfo>
      <detailparaminfo ref="params" :paramInfo="goodsParam"></detailparaminfo>
    </scroll>
    <backtop @click.native="btnclick" v-show="isbacktop"></backtop>
    <detailbottombar @addEvent="addToCart"></detailbottombar>
    <!-- <toast :message="toastdata" :show="show"></toast> -->
  </div>
</template>

<script>
import tabbar from "../detail/childcomps/tabbar.vue";
import { getdetail, Goods, GoodsParam } from "../../network/detail/detail";
import detailswiper from "./childcomps/detailswiper.vue";
import detailbaseinfo from "./childcomps/detailbaseinfo.vue";
import detailgoodsinfo from "./childcomps/detailgoodsinfo2.vue"; //商品详细数据
import scroll from "../../common/scroll/scroll.vue";
import detailparaminfo from "./childcomps/detailparaminfo.vue";
import detailbottombar from "./childcomps/detailbottonnar.vue";
import backtop from "components/common/BackTop/backtop.vue"; //回到顶部
// import toast from "../../components/common/toast/Toast.vue";
export default {
  name: "detail",
  data() {
    return {
      toastdata: "商品请求成功",
      iid: null,
      topimages: [],
      goods: {},
      detailInfo: {},
      goodsParam: {},
      themeTopys: [],
      bundle: null,
      currentIndex: 0,
      isbacktop: false,
      show: false,
    };
  },
  methods: {
    aaa() {
      this.$refs.scroll.scroll.refresh();
    },
    titleClick(i) {
      this.$refs.scroll.scroll.scrollTo(0, -this.themeTopys[i], 100);
    },
    btnclick() {
      this.$refs.scroll.scroll.scrollTo(0, 0, 100);
    },
    contentScroll(p) {
      const positiony = -p.y;
      if (positiony > 1000) {
        this.isbacktop = true;
      } else {
        this.isbacktop = false;
      }
      // for (let i = 0; i < this.themeTopys.length - 1; i++) {
      //   if (
      //     this.currentIndex !== i &&
      //     positiony >= this.themeTopys[i] &&
      //     positiony < this.themeTopys[i + 1]
      //   ) {
      //     this.currentIndex = i;
      //     this.$refs.nav.currentIndex = this.currentIndex;
      //     console.log(this.currentIndex);
      //   }
      // }
    },
    addToCart() {
      // 添加到购物车
      const product = {};
      product.image = this.topimages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.iid = this.iid;
      product.price = this.goods.realPrice;

      // 添加到购物车信息提醒
      this.$store.dispatch("addcart", product).then((res) => {
        // this.show = true;
        // this.toastdata = res;
        // setTimeout(() => {
        //   this.show = false;
        // }, 1500);
        this.$toast.isshow(res, 1500);
      });
    },
  },
  components: {
    tabbar,
    detailswiper,
    detailbaseinfo,
    detailgoodsinfo,
    scroll,
    detailparaminfo,
    detailbottombar,
    backtop,
    toast,
  },

  Detailbottonnardated() {},
  created() {
    this.iid = this.$route.params.iid;
    getdetail(this.iid).then((res) => {
      this.topimages = res.data.result.itemInfo.topImages;

      this.goods = new Goods(
        res.data.result.itemInfo,
        res.data.result.columns,
        res.data.result.shopInfo.services
      );
      this.detailInfo = res.data.result.detailInfo;
      this.goodsParam = new GoodsParam(
        res.data.result.itemParams.info,
        res.data.result.itemParams.rule
      );
      this.$nextTick(() => {
        clearTimeout(this.bundle);
        this.bundle = setTimeout(() => {
          // 根据最新的数据，dom已经加载完了,但是dom里面的图片还没加载完，所以会导致数据错误

          this.themeTopys.push(0);

          this.themeTopys.push(this.$refs.params.$el.offsetTop);
          this.themeTopys.push(100);
          this.themeTopys.push(this.$refs.recommed.$el.offsetTop);
          this.themeTopys.push(Number.MAX_VALUE);
        }, 2000);
      });
    });
  },
};
</script>

<style scoped>
#detail2 {
  position: relative;

  height: 100vh;
}
.banner {
  position: relative;
  z-index: 999;
}
.content {
  padding-top: 44px;
  height: calc(100% - 44px);
}
</style>
