<template>
  <div class="header" :style="headerStyle">
    <div class="header-left">
      <router-link to="/" tag="div">
         <span class="iconfont">&#xe624;</span>
      </router-link>
    </div>

    <div class="header-center">
      城市选择
    </div>

  </div>
</template>

<script>
export default{
  name: 'DetailHeader',
  data () {
    return {
      headerShow: true,
      headerStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    showDetailHeader () {
      var top = document.documentElement.scrollTop
      if (top === 0) {
        this.headerStyle.opacity = 0
      } else if (top > 10) {
        this.headerStyle.opacity = (top / 30)
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.showDetailHeader)
  },
  unmouted () {
    window.removeEventListener('scroll', this.showDetailHeader)
  }
}
</script>

<style lang='stylus' scoped>
@import '~styles/varstyles.styl'
  .header
    position: fixed
    top:0
    right:0
    left:0
    z-index:2
    background: $bgcolor
    line-height:.88rem
    color:#fff
    font-size:.30rem
    display: flex
    .header-left
      position:absolute
      width:.8rem
      color: white
      text-align:center
    .header-center
       text-align:center
       margin:0 auto
</style>
