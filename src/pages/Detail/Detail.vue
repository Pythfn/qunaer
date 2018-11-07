<template>
    <div>
        <detail-header></detail-header>
        <detail-banner
         :bannertitle="bannertitle"
         :bannerimg="bannerimg"
         :gallarylist="gallarylist"></detail-banner>
         <detail-list></detail-list>
    </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'

import axios from 'axios'
export default {
  name: 'Detail',
  data () {
    return {
      bannerimg: '',
      bannertitle: '',
      gallarylist: []
    }
  },
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  methods: {
    getGallaryList () {
      axios.get('/api/detail.json', {
        params: {
          id: this.$route.params.id
        }
      }).then(this.getGallaryListSucc)
    },
    getGallaryListSucc (res) {
      const data = res.data
      if (data.ret) {
        const list = data.data
        this.bannerimg = list.bannerImg
        this.bannertitle = list.sightName
        this.gallarylist = list.gallaryImgs
      }
    }
  },
  mounted () {
    this.getGallaryList()
  }
}
</script>
<style lang="stylus" scoped>

</style>
