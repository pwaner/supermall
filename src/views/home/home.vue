<template>
  <div id="home">
    <nav-bar><div slot="center">购物街</div></nav-bar>
    <tab-control
      :titles="['流行', '新款', '精选']"
      ref="tabControl1" class="tab-control"
      @tabClick="tabClick" v-show="isTabFixed" />
    <scroll class="content" ref="scroll" :probe-type= "3" 
    @scroll= "contentScroll" @pullingup= "loadMore"
    :pull-up-load= 'true'>
      <home-swiper :banners="banners" ref="hSwiper" @swiperimageLoad= "swiperimageLoad"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view></feature-view>
      <tab-control
        :titles="['流行', '新款', '精选']"
        ref="tabControl2"
        @tabClick="tabClick"></tab-control>
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
     <back-top @click.native="backTop" v-show="isShowBackTop"/> <!--监听组件点击 -->
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/scroll/Scroll";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import BackTop from "components/content/backTop/BackTop";

import { getHomeMultidata, getHomeGoods } from "network/home";
import { debounce } from "common/utils"

import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import FeatureView from "./childComps/FeatureView";

export default {
  name: "home",
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: "pop",
      isShowBackTop: false,
      tabOffsetTop: 0,
      isTabFixed: false,
      saveY: 0
    };
  },
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  activated: function() {
    this.$refs.hSwiper.startTimer();
    this.$refs.scroll.scrollTo(0, this.saveY, 0)
    this.$refs.scroll.refresh()
  },
  deactivated: function() {
    this.$refs.hSwiper.stopTimer();
    this.saveY = this.$refs.scroll.getSrollY()
  },
  created() {
    this.getHomeMultidata();
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh)
    this.$bus.$on('itemImagesLoad', () => {
      refresh()
    })
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    }
  },
  methods: {
    
    //事件监听代码
    tabClick(i) {
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
      this.$refs.tabControl1.currentIndex = i
      this.$refs.tabControl2.currentIndex = i
    },
    backTop() {
      this.$refs.scroll.scrollTo(0, 0, 600)
    },
    contentScroll(position) {
      this.isShowBackTop = (-position.y) > 800
      this.isTabFixed = (-position.y) > this.tabOffsetTop -44
    },
    loadMore() {
      this.getHomeGoods(this.currentType)
    },
    swiperimageLoad() {
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
    },
    //网络请求代码
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        // console.log(res)
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        // 上拉加载
        this.$refs.scroll.finishPullUp()
      });
    }
  }
};
</script>

<style scoped>
#home {
  height: 100vh;
}
#home::before,
#home::after {
  content: "";
  display: block;
  width: 100%;
}
#home::after {
  height: 49px;
}
.content {
  overflow: hidden;
  height: calc(100% - 93px);
}
.tab-control {
  position: fixed;
  z-index: 10;
}
</style>
