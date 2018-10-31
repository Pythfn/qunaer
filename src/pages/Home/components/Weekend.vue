<template>
  <div>
    <div class="weekendtitle">周末去哪儿</div>
    <ul>
      <li v-for="(item, index) of list" :key="index">
        <div class="li-item border-bottom">
          <div class="li-item-imgbox">
            <img class="li-item-img" v-bind:src="item.imgUrl">
          </div>
          <div class="li-item-content">
            <div class="li-item-title">{{item.title}}</div>
            <div class="li-item-desc">{{item.desc}}</div>
          </div>
        </div>
      </li>
    </ul>
  </div>

</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mix.styl'
  .weekendtitle
    width:100%
    padding-left:.3rem
    height:.8rem
    line-height:.8rem
    background:#f5f5f5
  .li-item
    width:100%
    .li-item-imgbox
      width:100%
      .li-item-img
        width:100%
    .li-item-content
      padding:.2rem
      width:100%
      .li-item-title
        font-size:.3rem
        margin-bottom:.15rem
      .li-item-desc
        font-size:.24rem
        margin-bottom:.15rem
</style>
