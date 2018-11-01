<template>
  <div>
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list :hotcities="hotCities" :cities="cities" :achange="achange"></city-list>
    <city-alphabet :cities="cities" @aclick="aclick"></city-alphabet>
  </div>

</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
import axios from 'axios'
export default {

  name: 'City',
  data () {
    return {
      hotCities: [],
      cities: [],
      achange: ''
    }
  },
  components: {
    CitySearch,
    CityHeader,
    CityList,
    CityAlphabet
  },
  methods: {
    getCityList () {
      axios.get('api/city.json').then(this.getCityListSucc)
    },
    getCityListSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const reslist = res.data
        this.hotCities = reslist.hotCities
        this.cities = reslist.cities
      }
    },
    aclick (e) {
      this.achange = e.target.innerHTML
    }
  },
  mounted () {
    this.getCityList()
  }
}

</script>

<style>
</style>
