<template>
  <div>
    <ul>
      <li v-for="(item, index) of recommendList" :key="index">
        <div class="li-item border-bottom">
          <img class="li-item-img" v-bind:src="item.imgUrl">
          <div class="li-item-content">
            <div class="li-item-title">{{item.title}}</div>
            <div class="li-item-desc">{{item.desc}}</div>
            <button class="li-item-button">查看详情</button>
          </div>
        </div>
      </li>
    </ul>
    <div class="like-more"><a href="#">查看所有产品</a></div>
  </div>

</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [{
        'id': '0001',
        'imgUrl': 'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg',
        'title': '故宫',
        'desc': '东方宫殿建筑代表，世界宫殿建筑典范'
      }, {
        'id': '0002',
        'imgUrl': 'http://img1.qunarzz.com/sight/p0/1511/d2/d2aec2dfc5aa771290.water.jpg_140x140_abb362a7.jpg',
        'title': '南山滑雪场',
        'desc': '北京专业级滑雪圣地'
      }, {
        'id': '0003',
        'imgUrl': 'http://img1.qunarzz.com/sight/p0/1501/f4/f467729126949c3a.water.jpg_140x140_ef235b1c.jpg',
        'title': '天安门广场',
        'desc': '我爱北京天安门，天安门上太阳升'
      }, {
        'id': '0004',
        'imgUrl': 'http://img1.qunarzz.com/sight/p0/1501/40/40b2b6c951b28fdd.water.jpg_140x140_1c863e5c.jpg',
        'title': '水立方',
        'desc': '中国的荣耀，阳光下的晶莹水滴'
      }, {
        'id': '0005',
        'imgUrl': 'http://img1.qunarzz.com/sight/p0/201308/23/b283071686e64dfec8d65eac.jpg_140x140_8c5a7c49.jpg',
        'title': '温都水城养生馆',
        'desc': '各种亚热带植物掩映其间仿佛置身热带雨林'
      }],
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
    overflow:hidden
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