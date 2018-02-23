import VueRouter from 'vue-router';

import App from "./App.vue";
import Page2 from "./Page2.vue";

let routes = [
  {
    path: "/",
    component: App
  },
  {
    path: "/page",
    component: Page2
  }
];
export default new VueRouter({
    routes
})