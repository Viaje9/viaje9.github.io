<template>
	<div id="map">
		<!-- 初始化地圖設定 -->
		<l-map
			style="width: 70%; height: 100vh"
			ref="myMap"
			:zoom="zoom"
			:center="center"
			:options="options"
		>
			<!-- 載入圖資 -->
			<l-tile-layer :url="url" :attribution="attribution" />
			<!-- 創建標記點 -->
			<v-marker-cluster>
				<l-marker
					:lat-lng="item.coord"
					v-for="(item, id) in data"
					:key="id"
					@click="click(item)"
				>
					<l-tooltip :options="{ permanent: true, interactive: true }">
						<div>{{ item.total }}</div>
					</l-tooltip>
				</l-marker>
			</v-marker-cluster>
		</l-map>
		<div id="detail">
			月租金:{{ detail.total }}
			<div class="carousel">
				<button class="next" @click="next(detail)">
          <span>下一張</span>
        </button>
				<div
					:key="imgIndex"
					v-for="(img, imgIndex) in detail.imgs"
					v-show="imgIndex == detail.imgStatus"
				>
					<img :src="img" />
				</div>
				<button class="prev" @click="prev(detail)">
          <span>上一張</span>
        </button>
			</div>
      <a :href="'https://rent.591.com.tw/rent-detail-'+ detail.detail +'.html'" target="_blank">點我看屋</a>
		</div>
	</div>
</template>

<script>
export default {
	name: "Map",
	data() {
		return {
			// 模擬資料
			data: [],
			zoom: 13,
			center: [24.1582042, 120.6569707],
			url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
			attribution: `© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors`,
			options: {
				zoomControl: false,
			},
			detail: {},
		};
	},
	mounted() {
		fetch("/data.json")
			.then((res) => {
				return res.json();
			})
			.then((result) => {
				this.data = result.map((x) => {
					x.coord = x.coord.split(",");
					if (x.HOA.length > 4) x.HOA = x.HOA.slice(0, -3);

					if (+x.HOA) {
						x.total = +x.HOA + x.price;
					} else {
						x.total = x.price;
					}
					x.imgs = x.imgs.split(",");
					x.imgStatus = 0;
					return x;
				});
			});
	},
	methods: {
		click(e) {
			this.detail = e;
			console.log(this.detail);
    },
    next(e) {
      e.imgStatus += 1
      if(e.imgStatus >= e.imgs.length) e.imgStatus = 0
    },
    prev(e) {
      e.imgStatus -= 1
      if(e.imgStatus < 0) e.imgStatus = e.imgs.length - 1
    }
	},
};
</script>
<style lang="scss">
html,
body {
	padding: 0;
	margin: 0;
}
#map {
	display: flex;
	width: 100%;
	height: 100vh;
	#detail {
		width: 30%;
		.carousel {
      width: 100%;
			position: relative;
			.next,
			.prev {
				background-color: rgba(0, 0, 0, 0);
				position: absolute;
				width: 50%;
        height: 100%;
				border: unset;
				outline: unset;
        display: flex;
        justify-content: center;
        align-items: center;
        span {
          font-size: 20px;
          display: block;
          width: 100px;
          height: 100px;
          border-radius: 100px;
          background-color: rgba(72, 72, 72, 0.397);
          line-height: 100px;
        }
			}
			.next {
				right: 0;
				top: 0;
        span {
          position: absolute;
          right: 10px;
        }
			}

			.prev {
				left: 0;
				top: 0;
        span {
          position: absolute;
          left: 10px;
        }
			}
			img {
				display: flex;
				width: 100%;
			}
		}
	}
}
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->

