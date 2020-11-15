<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <swipe :bannerViews="bannerViews"/>
    <home-recommend :recommends="recommends"/>
    <feature/>
    <tab-control class="tab-control" :titles="['流行', '新款','精选']"/>
    <ul>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
    </ul>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import Swipe from "components/common/swipe/Swipe";
import HomeRecommend from "./childCmps/HomeRecommend";
import Feature from "./childCmps/Feature";
import TabControl from "components/content/tabControl/TabControl";

import {getHomeMultiData} from "network/home";

export default {
  name: "Home",
  components: {
    NavBar,
    Swipe,
    TabControl,
    Feature,
    HomeRecommend,
  },
  data () {
    return {
      bannerViews: [], // 轮播图
      recommends: [],  // 推荐数据
    }
  },
  created () {
    this.getHomeMultiData ();
  },
  methods: {
    getHomeMultiData () {
      getHomeMultiData ().then (res => {
        this.bannerViews = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
    }
  }
}
</script>

<style scoped lang="less">
#home{
  padding-top: 44px;
  .home-nav {
    background-color: var(--color-tint);
    color: var(--color-background);
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    z-index: 1;
  }
  .tab-control{
    position: sticky;
    top: 44px;
  }
}


</style>
