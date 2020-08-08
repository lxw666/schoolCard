import Vue from "vue";
import "amfe-flexible";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vueSwiper from "vue-awesome-swiper";
import config from './util/config';
import vueHashCalendar from 'vue-hash-calendar';
import 'vue-hash-calendar/lib/vue-hash-calendar.css';
import layer from 'vue-layer-mobile'
import 'vue-layer-mobile/need/layer.css'
config();
Vue.use(vueSwiper);
Vue.use(vueHashCalendar);
Vue.use(layer);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
