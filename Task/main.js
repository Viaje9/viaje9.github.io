const bannerList = [
  "https://placehold.it/150x150",
  "https://placehold.it/250x150",
  "https://placehold.it/350x150",
  "https://placehold.it/450x150",
  "https://placehold.it/550x150",
  "https://placehold.it/650x150",
  "https://placehold.it/750x150",
  "https://placehold.it/850x150",
  "https://placehold.it/950x150",
  "https://placehold.it/1050x150",
]



const app = new Vue({
  el: '#app',
  data: {
    carousel: {
      bannerList: bannerList,
      nowBanner: 0
    },
    rawGoodsList: goodsList,
    goodsList: goodsList,
    popupGoods: {
      toggle: false,
      img: null,
      name: null
    },
    search: null
  },
  watch: {
    search() {
      if (this.search) {
        this.goodsList = this.rawGoodsList.filter(e => e.name === this.search)
      } else {
        this.goodsList = this.rawGoodsList
      }

    }
  },
  methods: {
    prev() {
      this.carousel.nowBanner--
      if (this.carousel.nowBanner < 0) {
        this.carousel.nowBanner = this.carousel.bannerList.length - 1
      }

    },
    next() {
      this.carousel.nowBanner++
      if (this.carousel.nowBanner > this.carousel.bannerList.length - 1) {
        this.carousel.nowBanner = 0
      }
    },
    openPopup(goods) {
      this.popupGoods.toggle = true
      this.popupGoods.img = goods.img
      this.popupGoods.name = goods.name
    },
    closePopup() {
      this.popupGoods.toggle = false
      this.popupGoods.img = null
      this.popupGoods.name = null
    }
  }

})