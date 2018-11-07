<template>
  <div class="search">
    <div>
        <input class="search-input" type="text" placeholder="输入城市名或拼音" v-model="result">
    </div>
    <div class="search-result" v-show="result" ref="wrapper">
      <div>
        <ul>
          <li class="result-item border-bottom" v-for="(item, index) of resultList" :key="index" @click="handleChangeCity(item)">{{item}}</li>
          <li class="result-item border-bottom" v-show="!(this.resultList.length)">没有找到数据</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default{
  name: 'CityHeader',
  props: {
    cities: [Object, Array]
  },
  data () {
    return {
      result: '',
      resultList: [],
      timer: null
    }
  },
  methods: {
    handleChangeCity (city) {
      this.$store.dispatch('changeCity', city)
      this.$router.push('/')
    }
  },
  watch: {
    result () {
      this.resultList = []
      if (this.result === '') {
        this.resultList = []
        return
      }
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        for (let i in this.cities) {
          for (let j in this.cities[i]) {
            if ((this.cities[i][j].name).indexOf(this.result) > -1 || (this.cities[i][j].spell).indexOf(this.result) > -1) {
              this.resultList.push(this.cities[i][j].name)
            }
          }
        }
      }, 50)
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  }
}
</script>

<style lang='stylus' scoped>
@import '~styles/varstyles.styl'
  .search
    background:$bgcolor
    height:.74rem
    padding-left:.14rem
    padding-right:.14rem
    .search-input
      width:100%
      box-sizing: border-box
      background:#fff
      padding:.1rem
      border-radius:.1rem
      text-align:center
    .search-result
      z-index: 1
      position:absolute
      overflow:hidden
      width:100%
      top: 1.58rem
      left:0
      right:0
      bottom:0
      background:#fff
      .result-item
        width:100%
        height:.24rem
        padding:.24rem

</style>
