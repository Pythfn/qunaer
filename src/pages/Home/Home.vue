<template>
    <div>
        <home-header></home-header>
        <home-swiper :list="swiperList"></home-swiper>
        <home-icons  :list="iconlist"></home-icons>
        <home-recommend :list="recommendlist"></home-recommend>
        <home-weekend :list="weekendlist"></home-weekend>
    </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
export default{
  name: 'Home',
  data () {
    return {
      swiperList: [],
      iconlist: [],
      recommendlist: [],
      weekendlist: []
    }
  },
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  methods: {
    getHomeList () {
      axios.get('api/index.json').then(this.getHomeListSucc)
    },
    getHomeListSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const resList = res.data
        this.swiperList = resList.swiperList
        this.iconlist = resList.iconList
        this.recommendlist = resList.recommendList
        this.weekendlist = resList.weekendList
      }
    }

  },
  mounted () {
    this.getHomeList()
  }
}

</script>

<style>
</style>
