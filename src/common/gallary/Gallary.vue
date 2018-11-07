<template>
    <div class="gallarybg" v-show="gallaryShow" @click="handleGallaryClose">
        <div class="wrapper">
            <swiper :options="swiperOption">
              <swiper-slide v-for="(item, index) of gallarylist" :key="index">
                <img class='gallary-img' :src="item" />
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
         </swiper>
        </div>
    </div>
</template>

<script>
export default{
  name: 'Gallary',
  props: {
    gallarylist: Array,
    gallaryShow: Boolean
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction'
      }
    }
  },
  methods: {
    handleGallaryClose () {
      this.$emit('close')
    }
  }
}
</script>

<style lang='stylus' scoped>
@import '~styles/varstyles.styl'
  .gallarybg
    display:flex
    flex-direction:column
    justify-content:center
    z-index: 99
    background:black
    position:fixed
    top:0
    left:0
    right:0
    bottom:0
    .wrapper
      height:0
      width:100%
      padding-bottom:100%
      .gallary-img
          width:100%
      .swiper-pagination
          color:white
</style>
