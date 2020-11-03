import Vue from 'vue'
import App from './App.vue'

import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
import "leaflet/dist/leaflet.css";

import { LMap, LTileLayer, LMarker, LPopup, LIcon, LTooltip } from 'vue2-leaflet';
import Vue2LeafletMarkerCluster from 'vue2-leaflet-markercluster';

Vue.component('v-marker-cluster', Vue2LeafletMarkerCluster);
Vue.component("l-map", LMap);
Vue.component("l-tile-layer", LTileLayer);
Vue.component("l-marker", LMarker);
Vue.component("l-popup", LPopup);
Vue.component("l-icon", LIcon);
Vue.component("l-tooltip", LTooltip);


import { Icon } from 'leaflet';

delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
