<template>
  <div class="header">
  <div class="header-left">
    <span class="iconfont">&#xe624;</span>
  </div>
  <div class="header-input">
      <span class="iconfont search-icon">&#xe632;</span>
      输入城市/景点/游玩主题
  </div>
  <div class="header-right">
        <router-link to="/city" class="tocity">
          {{this.$store.state.city}}
          <span class="iconfont arrow-icon">&#xe6aa;</span>
        </router-link>
  </div>

  </div>
</template>

<script>
export default{
  name: 'HomeHeader'
}
</script>

<style lang='stylus' scoped>
@import '~styles/varstyles.styl'
  .header
    display:flex
    background: $bgcolor
    line-height:.88rem
    color:#fff
    font-size:.30rem
    .header-left
      floar:left
      width:.80rem
      text-align:center
    .header-input
      flex: 1
      color:#e4e7ea
      margin-top:.14rem
      margin-bottom:.14rem
      line-height:.6rem
      background:white
      border-radius:.1rem
      padding-left:.2rem
    .header-right
      float:right
      min-width:1.2rem
      padding-left:0.1rem
      padding-right:0.1rem
      text-align:center
    .tocity
      color:white

</style>
