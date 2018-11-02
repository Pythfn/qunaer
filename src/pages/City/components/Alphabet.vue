<template>
  <div class="alphabet">
    <div class="alphabet-item"
     v-for="key of clist"
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
  data () {
    return {
      touching: Boolean,
      timer: null
    }
  },
  computed: {
    clist () {
      const temp = []
      for (const key in this.cities) {
        temp.push(key)
      }
      return temp
    }
  },
  methods: {
    alphaclick (e) {
      this.$emit('aclick', e)
    },
    handleTouchStart () {
      this.touching = true
    },
    handleTouchMove (e) {
      if (this.touching) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 145
          const cityindex = Math.floor(touchY / 20)
          if (cityindex < this.clist.length && cityindex > -1) {
            const nowAlpha = this.clist[cityindex]
            this.$emit('aclick2', nowAlpha)
          }
        }, 16)
      }
    },
    handleTouchEnd () {
      this.touching = false
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
