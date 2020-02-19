<template>
  <div class="detail">
    <div class="dnav-bar"><detail-nav-bar /></div>
    <scroll class="content" ref= "scroll">
      <detail-swiper :banners= "topImages"></detail-swiper>
      <detail-base-info :goods= "goods"></detail-base-info>
      <detail-shop-info :shop= "shop"></detail-shop-info>
      <detail-goods-info :detail-info= "detailInfo"></detail-goods-info>
    </scroll>
  </div>
</template>

<script>
import DetailSwiper from "./childComps/detailSwiper";
import DetailNavBar from "./childComps/detailNavBar";
import DetailBaseInfo from "./childComps/detailBaseInfo";
import DetailShopInfo from "./childComps/detailShopInfo";
import DetailGoodsInfo from "./childComps/detailGoodsInfo";

import Scroll from "components/common/scroll/Scroll";

import { debounce } from "common/utils"
import { getDetail, Goods, Shop } from "network/detail";
export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {}
    };
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    Scroll,
    DetailShopInfo,
    DetailGoodsInfo
  },
  created() {
    this.iid = this.$route.params.iid;
    getDetail(this.iid).then(res => {
      // console.log(res.result)
      const data = res.result;
      this.topImages = data.itemInfo.topImages;
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      this.shop = new Shop(data.shopInfo);
      this.detailInfo = data.detailInfo
    });
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh)
    this.$bus.$on('itemImgLoad', () => {
      refresh()
    })
  }
};
</script>

<style scoped>
.detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}
.content{
  height: calc(100% - 44px);
}
.dnav-bar{
  position: relative;
  z-index: 10;
}
</style>
