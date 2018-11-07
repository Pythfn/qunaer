<template>
  <div>
    <ul>
      <router-link tag="li"
      v-for="item of list" :key="item.id"
        :to="'/detail/' + item.id">
        <div class="li-item border-bottom">
          <img class="li-item-img" v-bind:src="item.imgUrl">
          <div class="li-item-content">
            <div class="li-item-title">{{item.title}}</div>
            <div class="li-item-desc">{{item.desc}}</div>
            <button class="li-item-button">查看详情</button>
          </div>
        </div>
      </router-link>
    </ul>
    <div class="like-more"><a href="#">查看所有产品</a></div>
  </div>

</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    list: Array
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mix.styl'
  .like-more
    text-align:center
    line-height:.8rem
  .li-item
    width:100%
    height:3.16rem
    display:flex
    padding-left:.2rem
    margin-top:.2rem
    position:relative
    .li-item-img
      display:block
      width:2rem
      height:2rem
      padding:.1rem
    .li-item-content
      flex:1
      padding:.1rem
      padding-right:.4rem
      width:3rem
      .li-item-title
        padding-top:.3rem
        font-size:.4rem
        margin-bottom:.2rem
      .li-item-desc
        textellipsis()
      .li-item-button
        background:white
        color:orange
        position:absolute
        bottom:1rem

</style>
