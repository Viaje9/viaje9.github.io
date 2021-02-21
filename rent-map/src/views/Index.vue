<template>
  <div>
    <div class="navbar bg-light d-flex justify-content-center">
      <ul class="navbar-nav me-4">
        <li class="nav-item">
          <div class="input-group input-group-sm mb-3">
            <input type="number" class="form-control text-end" v-model="max" />
            <span class="input-group-text">最高</span>
          </div>
        </li>
        <li class="nav-item">
          <div class="input-group input-group-sm mb-3">
            <input type="number" class="form-control text-end" v-model="min" />
            <span class="input-group-text">最低</span>
          </div>
        </li>
        <li>
          <div class="input-group input-group-sm mb-3">
            <span class="input-group-text px-5"
              >目前筆數：{{ data.length }}</span
            >
            <button @click="search" class="btn btn-secondary px-3">搜索</button>
          </div>
        </li>
      </ul>
    </div>
    <div
      class="container-fluid d-flex flex-wrap v-scorll"
      @scroll="infinity($event)"
    >
      <template v-for="(item, i) in data">
        <div :key="i" class="card m-2" style="width:22.4rem;">
          <div class="v-carousel">
            <span class="next" @click="next(item)"></span>
            <div
              v-for="(img, imgIndex) in item.phots"
              v-show="imgIndex === item.imgStatus"
              :key="imgIndex"
            >
              <img :src="img" />
            </div>
            <span class="prev" @click="prev(item)"></span>
          </div>
          <div class="card-body">
            <h5 class="card-title">總共:{{ item.totalPrice }}</h5>
            <ul class="card-text list-group">
              <li class="list-group-item">月租金:{{ item.price }}</li>
              <li class="list-group-item">管理費:{{ item.HOA }}</li>
              <li class="list-group-item">瀏覽數:{{ item.browsenum_all }}</li>
              <li class="list-group-item">瀏覽數:{{ item.updateTime }}</li>
            </ul>
            <a
              target="_blank"
              :href="'https://rent.591.com.tw/rent-detail-' + item.id + '.html'"
              class="btn btn-primary mt-2"
              >點我看屋
            </a>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
<script
  src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
  integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
  crossorigin="anonymous"
></script>
<script>
export default {
  data() {
    return {
      // 模擬資料
      rawData: [],
      data: [],
      max: 6800,
      min: 5000,
      rawDataCount: 0,
    };
  },
  mounted() {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        const vm = this;
        vm.rawData = data
          .map((e) => {
            e.imgStatus = 0;
            return e;
          })
          .sort((a, b) => a.browsenum_all - b.browsenum_all);
        vm.data = vm.rawData.filter((e, i) => {
          let eveyList = [false, false, false];
          if (i < 30) eveyList[0] = true;
          if (vm.DF(e.coord)) eveyList[1] = true;
          if (e.totalPrice <= vm.max) eveyList[2] = true;
          if (e.totalPrice >= vm.min) eveyList[3] = true;
          return eveyList.every((e) => e);
        });
        vm.rawDataCount = vm.data.length;
      });
  },
  methods: {
    DF(coord) {
      const x = 24.16265936034507;
      const y = 120.64961448618905;
      const r = coord[0];
      const s = coord[1];
      return (
        Math.sqrt(Math.pow(x - r, 2) + Math.pow(y - s, 2)) <
        0.018773070843048998
      );
    },
    next(i) {
      i.imgStatus++;
      if (i.imgStatus + 1 > i.phots.length) {
        i.imgStatus = 0;
      }
    },
    prev(i) {
      i.imgStatus--;
      if (i.imgStatus < 0) {
        i.imgStatus = i.phots.length - 1;
      }
    },
    infinity(event) {
      const vm = this;
      const currHeight = event.target.offsetHeight + event.target.scrollTop;
      const totalHeight = event.target.scrollHeight - 500;
      if (currHeight > totalHeight) {
        vm.rawDataCount += 30;
        vm.data = vm.rawData.filter((e, i) => {
          let eveyList = [false, false, false];
          if (i < vm.rawDataCount) eveyList[0] = true;
          if (vm.DF(e.coord)) eveyList[1] = true;
          if (e.totalPrice <= vm.max) eveyList[2] = true;
          if (e.totalPrice >= vm.min) eveyList[3] = true;70
          return eveyList.every((e) => e);
        });
      }
    },
    search() {
      const vm = this;
      vm.data = vm.rawData.filter((e, i) => {
        let eveyList = [false, false, false];
        if (i < 30) eveyList[0] = true;
        if (vm.DF(e.coord)) eveyList[1] = true;
        if (e.totalPrice <= vm.max) eveyList[2] = true;
        if (e.totalPrice >= vm.min) eveyList[3] = true;
        return eveyList.every((e) => e);
      });
    },
  },
};
</script>
<style lang="scss">
@import url("https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css");
.v-scorll {
  max-height: 83vh;
  overflow-y: scroll;
  .v-carousel {
    position: relative;
    .next,
    .prev {
      position: absolute;
      top: 0;
      height: 100%;
      width: 50%;
      background: unset;
      border: unset;
      outline: unset;
    }
    .next {
      right: 0;
    }
    .prev {
      left: 0;
    }
    img {
      width: 100%;
    }
  }
}
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->

<!-- 
分批顯示
單批最多150筆
新增格局、男女皆可、房東提供、坪數
-->
