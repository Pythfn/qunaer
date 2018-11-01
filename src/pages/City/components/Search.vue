<template>
  <div class="search">
    <div>
        <input class="search-input" type="text" placeholder="输入城市名或拼音">
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
  .search
    background:$bgcolor
    height:.74rem
    overflow:hidden
    padding-left:.14rem
    padding-right:.14rem
    .search-input
      width:100%
      box-sizing: border-box
      background:white
      padding:.1rem
      border-radius:.1rem
      text-align:center

</style>
