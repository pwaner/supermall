<template>
  <div class="page">
    <nav-bar class="navbar">
      <div slot="left" class="back" @click="backClick"><img src="~assets/img/common/back.svg" alt=""></div>
      <div slot="center" class="dnav-bar">
        <span v-for="(item, i) in titles" :key="i" @click="itemClick(i)"
        class="item-class" :class="{active: i === currentIndex}">
        {{item}}</span>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  data() {
    return {
      titles: ['商品', '参数', '评论', '推荐'],
      currentIndex: 0
    }
  },
  components: {
    NavBar
  },
  methods: {
    itemClick(i) {
      this.currentIndex = i
    },
    backClick() {
      this.$router.back()
    }
  }
}
</script>

<style scoped>
.navbar {
  background-color: #fff
}
.dnav-bar {
  display: flex
}
  .item-class{
    flex: 1;
    color: #222;
    font-size: 14px
  }
  .active {
    color: var(--color-tint)
  }
  .back {
    text-align: center;
    line-height: 44px;
  }
  .back img{
    margin-top: 10px
  }
</style>
