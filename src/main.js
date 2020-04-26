import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

// 全局引入echarts  也可以在组件中按需引入
// import echarts from "echarts";
// Vue.prototype.$echarts = echarts;

// 引入element-ui
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

import VueAMap from "vue-amap";
Vue.use(VueAMap);
VueAMap.initAMapApiLoader({
  key: "your amap key",
  plugin: [
    "AMap.Autocomplete",
    "AMap.PlaceSearch",
    "AMap.Scale",
    "AMap.OverView",
    "AMap.ToolBar",
    "AMap.MapType",
    "AMap.PolyEditor",
    "AMap.CircleEditor"
  ],
  // 默认高德 sdk 版本为 1.4.4
  v: "1.4.4"
});

import "./assets/css/index.scss";
import "./assets/fonts/iconfont.css";
import "./assets/fonts/syst.css";

new Vue({
  router,
  store,
  render: function(h) {
    return h(App);
  }
}).$mount("#app");
