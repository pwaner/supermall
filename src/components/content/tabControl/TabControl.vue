<template>
  <div class="tab-control">
    <div v-for="(item, i) in titles" :key="i"
     class="tab-control-item" :class="{active: i === currentIndex}" @click="itemClick(i)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    itemClick(i) {
      this.currentIndex = i;
      this.$emit('tabClick', i)
    }
  },
  components: {

  }
}
</script>

<style scoped>
  .tab-control{
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #fff
  }
  .tab-control span{
    display: block;
    padding: 0 10px;
    font-size: 14px;
    border-bottom:2px solid #fff;
    line-height: 20px;
  }
  .active{
    color: var(--color-high-text);
    border-bottom:2px solid var(--color-high-text)
  }
</style>
