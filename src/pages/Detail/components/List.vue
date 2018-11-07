<template>
  <div class="list">
    <div class="detail-item"
     v-for="(item, index) of list"
      :key="index">
        <div class="detail-title">{{item.title}}</div>
      <detail-list :list="item.children"></detail-list>
    </div>
    </div>
</template>

<script>
export default {
  name: 'DetailList',
  props: {
    list: [Object, Array]
  }
}
</script>

<style lang="stylus" scoped>
  .detail-item
    background: #F5F5F5
    padding:0 .2rem
    line-height: .7rem
</style>
