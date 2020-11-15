<template>
  <div class="recommend">
    <div v-for="item in recommends" :key="item.title" class="recommend-item">
      <img :src="item.image" alt="">
      <div>{{ item.title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Recommend",
  props: {
    recommends: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style scoped lang="less">
.recommend {
  width: 100%;
  display: flex;
  text-align: center;
  font-size: 12px;
  padding-bottom: 10px;
  border-bottom: 6px solid #eee;
  .recommend-item {
    flex: 1;
    img {
      width: 65px;
      height: 65px;
    }
  }
}
</style>
