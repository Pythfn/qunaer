<template>
  <div class="list">
    <div class="citybar">当前城市</div>
    <div class="button">{{this.nowCity}}</div>
    <div class="citybar">热门城市</div>
    <ul class="hotcitylist">
      <li class="button border" v-for="item of hotcities" :key="item.id">{{item.name}}
      </li>
    </ul>
    <div class="allcity">
      <div v-for="(alpha, key) of cities" :key="key">
        <div class="citybar">{{key}}</div>
        <ul>
          <li v-for="item of alpha" class="cityitem border-bottom">{{item.name}}</li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
export default{
  name: 'CityList',
  props: {
    hotcities: Array,
    cities: [Array, Object]
  },
  data () {
    return {
      nowCity: '北京'
    }
  },
  mounted () {
  }
}

</script>

<style lang='stylus' scoped>
@import '~styles/varstyles.styl'
  .list
    .citybar
      background:   #F5F5F5
      font-size:.24rem
      padding:.24rem
      width:100%
    .hotcitylist
      display:flex
      flex-wrap:wrap
    .button
      width:33.3%
      height:0.8rem
      text-align:center
      line-height:.8rem
    .allcity
      .cityitem
        width:100%
        height:.24rem
        padding:.24rem
</style>
