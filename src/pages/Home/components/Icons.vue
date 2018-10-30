<template>
 <div class="swiper">
  <swiper :options="swiperOption">

    <swiper-slide v-for="(page,index) of iconPage"
        :key="index">
      <div class="icon-page">
        <div class="icon"
        v-for="item of page"
        :key="item.id">
          <div class="icon-item">
            <img :src="item.imgUrl" class="icon-img"/>
            <p>{{item.desc}}</p>
          </div>
        </div>
      </div>
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>

  </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      iconList: [{
        'id': '0001',
        'imgUrl': 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        'desc': '景点门票'
      }, {
        'id': '0002',
        'imgUrl': 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        'desc': '景点门票'
      }, {
        'id': '0003',
        'imgUrl': 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        'desc': '景点门票'
      }, {
        'id': '0004',
        'imgUrl': 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        'desc': '景点门票'
      }, {
        'id': '0005',
        'imgUrl': 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        'desc': '景点门票'
      }, {
        'id': '0006',
        'imgUrl': 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        'desc': '景点门票'
      }, {
        'id': '0007',
        'imgUrl': 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        'desc': '景点门票'
      }, {
        'id': '0008',
        'imgUrl': 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        'desc': '景点门票'
      }, {
        'id': '0009',
        'imgUrl': 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        'desc': '景点门票'
      }, {
        'id': '0010',
        'imgUrl': 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        'desc': '景点门票'
      }],
      swiperOption: {
        pagination: '.swiper-pagination',
        autoplay: false
      }
    }
  },
  computed: {
    iconPage () {
      let pages = []
      this.iconList.forEach(function (item, index) {
        /* 取整，每8个按钮一页 */
        let p = Math.floor(index / 8)
        if (!pages[p]) {
          pages[p] = []
        }
        pages[p].push(item)
      }
      )
      return pages
    }
  }
}

</script>

<style lang="stylus" scoped>

  .swiper
    margin-top:0.1rem
    height:3.8rem
    overflow:hidden
    width:100%
    .icon-page
      width:100%
      height:3.8rem
      overflow:hidden
      .icon
        float:left
        overflow:hidden
        width:25%
        height:1.6rem
        .icon-item
          text-align:center
          height:1.6rem
          .icon-img
            display:block
            margin:0 auto
            width:1.1rem
            heigth:1.1rem
            padding:0.1rem
</style>
