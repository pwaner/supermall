<template>
  <div id="app">
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from 'components/content/mainTabBar/mainTabBar'
import router from './router'
export default {
  name: 'app',
  router,
  components: {
    MainTabBar
  }
}
</script>

<style>
  @import 'assets/css/base.css';
</style>
