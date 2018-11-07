<template>
  <div class="banner">
    <router-link to="/" tag="div" class="banner-back iconfont">&#xe624;</router-link>
    <div class="banner-imgbox" @click="handleBannerClick">
      <img class="banner-img" :src="bannerimg">
    </div>
    <div class="banner-info">
      <div class="banner-title">{{bannertitle}}</div>
    </div>
    <common-gallary
     :gallarylist="gallarylist"
     :gallaryShow="gallaryShow"
     @close="handleGallaryClose"></common-gallary>
  </div>
</template>

<script>
import CommonGallary from '@/common/gallary/Gallary'
export default{
  name: 'DetailBanner',
  props: {
    bannerimg: String,
    bannertitle: String,
    gallarylist: Array
  },
  data () {
    return {
      gallaryShow: false
    }
  },
  components: {
    CommonGallary
  },
  methods: {
    handleBannerClick () {
      this.gallaryShow = true
    },
    handleGallaryClose () {
      this.gallaryShow = false
    }
  }
}
</script>

<style lang='stylus' scoped>
@import '~styles/varstyles.styl'
  .banner
    width:100%
    position:relative
    .banner-back
      background:rgba(0, 0, 0, 0.7)
      width:.72rem
      height:.72rem
      color:white
      text-align:center
      line-height:.72rem
      border-radius:.72rem
      position:absolute
      left:.15rem
      top:.15rem
    .banner-imgbox
      overflow:hidden
      width:100%
      height:0
      padding-bottom:55%
      .banner-img
        width:100%
    .banner-info
      position:absolute
      bottom:0rem
      left:0rem
      right:0rem
      height:.6rem
      background-image: linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0))
      .banner-title
        position:relative
        color:white
        left:.2rem
        font-size:.36rem
</style>
