<template>
  <div class="alphabet">
    <div class="alphabet-item"
     v-for="(value, key) of cities"
      :key="key"
      :ref="key"
       @click="alphaclick"
       @touchstart="handleTouchStart"
       @touchmove="handleTouchMove"
       @touchend="handleTouchEnd">{{key}}</div>
  </div>
</template>

<script>
export default{
  name: 'CityAlphabet',
  props: {
    cities: [Object, Array]
  },
  methods: {
    alphaclick (e) {
      this.$emit('aclick', e)
    },
    handleTouchStart () {
      console.log(1)
    },
    handleTouchMove (e) {
      /* const aTop = this.$refs['A'][0].offsetTop */
      console.log(e.touches[0].clientY)
      console.log(e.touches[0].clientY)
    },
    handleTouchEnd () {
      console.log(3)
    }

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
