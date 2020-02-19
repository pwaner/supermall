<template>
  <div class="reconmend">
    <a :href="item.link" v-for="(item, i) in recommends" :key="i">
      <img :src="item.image" alt />
      <p>{{item.title}}</p>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {};
  },
  components: {}
};
</script>

<style scoped>
  .reconmend{
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    text-align: center;
    padding: 10px 0 15px;
    border-bottom: 8px solid #eee;
  }
  .reconmend a{
    display: block;
  }
  .reconmend a img{
    width: 70px;
    height: 70px;
  }
  .reconmend a p{
    line-height: 0;
    font-size: 12px;
    letter-spacing: 1px
  }
</style>
