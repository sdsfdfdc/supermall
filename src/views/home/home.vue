<template>
  <div id="home">
    <nav-bar class="home-navbar">
      <template v-slot:center>
        <div>购物街</div>
      </template>
    </nav-bar>
    <tab-control
      v-show="isTabFixed"
      ref="tabcontrol1"
      @tabclick="tabclick"
      :title="['流行', '新款', '精选']"
    ></tab-control>
    <scroll
      ref="scroll"
      class="content"
      :scroll="3"
      @scroll="contentScroll"
      :pullUpLoad="true"
      @pullingUp="loadMore"
    >
      <home-swiper :Hbanners="banners"></home-swiper>
      <home-recommend-view :recommends="recommends"></home-recommend-view>
      <home-feature-view></home-feature-view>
      <tab-control
        ref="tabcontrol1"
        @tabclick="tabclick"
        :title="['流行', '新款', '精选']"
      ></tab-control>
      <goods-list :goods="showGoods"></goods-list
    ></scroll>
    <backtop @click.native="btnclick" v-show="showbacktop"></backtop>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar.vue";
import { getHomeMultidata, getHomeGoods } from "@/network/Home/home.js"; //首页的网络请求
import HomeSwiper from "./childComps/HomesSwiper.vue"; //轮播图插件
import HomeRecommendView from "./childComps/HomeRecommendView.vue"; //推荐信息
import HomeFeatureView from "./childComps/HomeFeatureView.vue"; //特色信息

import TabControl from "../../components/content/tabcontrol/TabControl.vue";

import GoodsList from "../../components/content/goods/GoodList.vue";
import scroll from "../../common/scroll/scroll.vue"; //封装好的scroll
import backtop from "components/common/BackTop/backtop.vue"; //回到顶部

export default {
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommendView,
    HomeFeatureView,
    TabControl,
    GoodsList,
    scroll,
    backtop,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      showbacktop: false,
      offestTop: 0,
      isTabFixed: false,
    };
  },
  created() {
    // 请求多个数据
    this.getHomeMultidata();
    // 请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  updated() {
    this.offestTop = this.$refs.tabcontrol1.$el.offsetTop;
  },
  //请求数据
  methods: {
    /*
    网络请求相关的方法
    */

    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.banners = res.data.data.banner.list;
        this.recommends = res.data.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      //每次调用时使page加一，也就是请求下一页数据,这只是一个局部变量，不会影响接口的page状态
      const page = this.goods[type].page + 1;
      // 请求数据
      getHomeGoods(type, page).then((res) => {
        // 储存数据
        this.goods[type].list.push(...res.data.data.list);
        // 因为储存了数据，所以页码也要储存为加一，在这将page的状态和上面的局部变量同步
        this.goods[type].page += 1;
      });
    },
    /*
    事件监听相关的方法
    */
    tabclick(i) {
      switch (i) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
      }
      this.$refs.tabcontrol1.currentIndex = i;
    },
    // 防抖
    debounce(delay) {
      let timer = null;

      clearTimeout(timer);

      timer = setTimeout(() => {
        this.$refs.scroll.finishPullUp();
        this.$refs.scroll.scroll.refresh();
      }, delay);
    },
    // 加载更多
    loadMore() {
      this.getHomeGoods(this.currentType);
      this.debounce(1000);
    },
    btnclick() {
      this.$refs.scroll.scroll.scrollTo(0, 0, 500);
    },
    contentScroll(p) {
      this.showbacktop = -p.y > 1000;
      this.isTabFixed = -p.y > this.offestTop;
    },
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
};
</script>

<style scoped>
#home {
  height: 100vh;
}
.home-navbar {
  position: sticky;
  top: 0;
  z-index: 999;
}
.content {
  height: calc(100% - 93px);
  overflow: hidden;
}
/* .fixed {
  position: fixed;
  top: 44px;
  left: 0px;
  right: 0px;
} */
</style>
