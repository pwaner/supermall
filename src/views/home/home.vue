<template>
  <div id="home">
    <nav-bar><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners" ref="hSwiper"></home-swiper>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import {getHomeMultidata} from 'network/home'
import HomeSwiper from './childComps/HomeSwiper'
export default {
  name: 'home',
  data() {
    return {
      banners: [],
      recommends: []
    }
  },
  components: {
    NavBar,
    HomeSwiper
  },
  activated: function () {
      this.$refs.hSwiper.startTimer()
    },
    deactivated: function () {
      this.$refs.hSwiper.stopTimer()
    },
  created() {
    getHomeMultidata().then(res => {
      this.banners = res.data.banner.list
      this.recommends = res.data.recommend.list
    }).catch(err => {
      console.log(err)
    })
  }
}
</script>

<style scoped>
</style>
