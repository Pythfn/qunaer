<template>
 <div class="swiper">
  <swiper :options="swiperOption">

    <swiper-slide v-for="item of swiperList" :key="item.id">
      <img v-bind:src="item.imgurl"  class="swiper-img">
    </swiper-slide>

    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperList: [{
        'id': '01',
        'imgurl': 'http://img1.qunarzz.com/piao/fusion/1809/c6/2467595fffc3b302.jpg_750x200_cca13d51.jpg'
      }, {
        'id': '02',
        'imgurl': 'http://img1.qunarzz.com/piao/fusion/1810/eb/5cacf42b59e91e02.jpg_750x200_9c0a77b0.jpg'
      }, {
        'id': '03',
        'imgurl': 'http://img1.qunarzz.com/piao/fusion/1810/4a/5a96cf1ed2624002.jpg_750x200_89f31fc8.jpg'
      }],
      swiperOption: {
        /* 显示滚动小点 */
        pagination: '.swiper-pagination',
        loop: true
      }
    }
  }
}

</script>

<style lang="stylus" scoped>
  .swiper >>> .swiper-pagination-bullet-active
    background:white

  .swiper
    overflow:hidden
    width:100%
    background:#ccc
    height:0
    padding-bottom:26.7%
    .swiper-img
      width:100%
</style>
