<template>
  <div class="tab-control">
    <div v-for="(item, index) in titles" :key="item.title" class="tab-control-item"
         :class="{active:index === currentIndex}" @click="tabItem(index)">
      <span> {{ item }} </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  data () {
    return {
      currentIndex: 0
    }

  },
  props: {
    titles: {
      type: Array,
      default () {
        return []
      }
    }
  },
  methods: {
    tabItem (index) {
      this.currentIndex = index;
    }
  }
}
</script>

<style scoped lang="less">
.tab-control {
  display: flex;
  font-size: 15px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  background-color: #fff;
  .tab-control-item {
    flex: 1;
    span {
      padding: 3px;
    }
  }

  .active {
    color: var(--color-high-text);

    span {
      border-bottom: 3px solid var(--color-high-text);
    }
  }
}
</style>
