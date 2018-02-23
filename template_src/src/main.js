import Vue from "vue";
import VueRouter from "vue-router";
import router from './routes.js';

Vue.use(VueRouter);
//window.Vue = require("vue");
//import App from "./App.vue";
import Page from "./components/nimbo/Page.vue";

Vue.component("nb-page", Page);

new Vue({
  el: "#app",
  router,
  //render: h => h(App)
});
