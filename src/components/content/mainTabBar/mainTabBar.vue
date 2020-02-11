<template>
  <tab-bar>
      <tab-bar-item path="/home" activeColor='deepPink'>
        <img slot="item-icon" src="~assets/img/tabBar/home.svg" alt=""> <!-- 具名插槽要加属性slot -->
        <img slot="item-icon-active" src="~assets/img/tabBar/home_active.svg" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path='/category' activeColor='deepPink'>
        <img slot="item-icon" src="~assets/img/tabBar/category.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tabBar/category_active.svg" alt="">
        <div slot="item-text">导航</div>
      </tab-bar-item>
      <tab-bar-item path='/cart' activeColor='deepPink'>
       <img slot="item-icon" src="~assets/img/tabBar/shopcart.svg" alt="">
       <img slot="item-icon-active" src="~assets/img/tabBar/shopcart_active.svg" alt="">
      <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path='/profile' activeColor='deepPink'>
        <img slot="item-icon" src="~assets/img/tabBar/profile.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tabBar/profile_active.svg" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";
export default {
  data() {
    return {

    }
  },
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>
</style>
