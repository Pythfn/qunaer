<template>
 <div class="swiper"  v-if="list">
  <swiper :options="swiperOption" >
    <swiper-slide v-for="item of list" :key="item.id">
      <img v-bind:src="item.imgUrl"  class="swiper-img">
    </swiper-slide>

    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
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
    padding-bottom:31.2%
    .swiper-img
      width:100%
</style>
