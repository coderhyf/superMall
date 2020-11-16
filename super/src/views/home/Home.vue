<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swipe :bannerViews="bannerViews"/>
    <home-recommend :recommends="recommends"/>
    <feature/>
    <tab-control class="tab-control" @tabClick="tabClick"  :titles="['流行', '新款','精选']"/>
    <goods-list :goods="showGoods"/>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import HomeRecommend from "./childCmps/HomeRecommend";
import HomeSwipe from "./childCmps/HomeSwipe";
import Feature from "./childCmps/Feature";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import {getHomeMultiData, getHomeGoods} from "network/home";

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwipe,
    TabControl,
    Feature,
    GoodsList,
    HomeRecommend,
  },
  data () {
    return {
      bannerViews: [], // 轮播图
      recommends: [],  // 推荐数据
      goods: {
        'pop': {page: 0, list: []},    // 流行
        'new': {page: 0, list: []},    // 新品
        'sell': {page: 0, list: []},   // 精选
      },
      currentType: 'pop'
    }
  },
  computed:{
    showGoods(){
      return this.goods[this.currentType].list
    }
  },
  created () {
    // 轮播图/推荐数据
    this.getHomeMultiData ();
    // 商品详情
    this.getHomeGoods ('pop');
    this.getHomeGoods ('new');
    this.getHomeGoods ('sell');
  },
  methods: {
    // 事件监听的方法
    tabClick (index) {
      switch (index) {
        case 0 :
          this.currentType = 'pop';
          break;
        case 1 :
          this.currentType = 'new';
          break;
        case 2 :
          this.currentType = 'sell';
          break;
      }
    },
    // 网路请求
    getHomeMultiData () {
      getHomeMultiData ().then (res => {
        this.bannerViews = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
    },
    getHomeGoods (type) {
      const page = this.goods[type].page + 1;
      getHomeGoods (type, page).then (res => {
        this.goods[type].list.push (...res.data.list);
        this.goods[type].page += 1;
      })
    },
  }
}
</script>

<style scoped lang="less">
#home {
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

  .tab-control {
    position: sticky;
    top: 44px;
    z-index: 9;
  }
}


</style>
