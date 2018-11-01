<template>
  <div class="header">
  <div class="header-left">
    <router-link to="/">
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
  name: 'CityHeader'
}
</script>

<style lang='stylus' scoped>
@import '~styles/varstyles.styl'
  .header
    position:relavite
    background: $bgcolor
    line-height:.88rem
    color:#fff
    font-size:.30rem
    .header-left
      position:absolute
      left:0
      width:.80rem
      text-align:center
      span
        color:white
    .header-center
      text-align:center
      margin:0 auto

</style>
