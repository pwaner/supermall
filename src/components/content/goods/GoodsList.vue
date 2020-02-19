<template>
  <div class="goods">
    <goods-list-item v-for="(item, i) in goods" :key="i" :goods-item='item'></goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'
export default {
  props: {
    goods: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {

    }
  },
  components: {
    GoodsListItem
  }
}
</script>

<style scoped>
  .goods{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
</style>
