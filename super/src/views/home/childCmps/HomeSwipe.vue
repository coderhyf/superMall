<template>
  <div>
    <mt-swipe :auto="4000" >
      <mt-swipe-item v-for="item in bannerViews" :key="item.image" >
        <img :src="item.image" alt="" style="width: 100%;">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {
  name: "Swipe",
  props: {
    bannerViews: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped lang="less">
</style>
