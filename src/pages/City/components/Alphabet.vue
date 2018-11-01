<template>
  <div class="alphabet">
    <div class="alphabet-item" v-for="(value, key) of cities" :key="key">{{key}}</div>
  </div>
</template>

<script>
export default{
  name: 'CityAlphabet',
  props: {
    cities: [Object, Array]
  }
}
</script>

<style lang='stylus' scoped>
@import '~styles/varstyles.styl'
  .alphabet
    display:flex
    flex-direction:column
    width:.3rem
    z-index:1
    position:absolute
    right:.1rem
    top:3rem
    .alphabet-item
      line-height: .4rem
      text-align:center
      color:$bgcolor
</style>
