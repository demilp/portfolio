import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueSimpleMarkdown from "vue-simple-markdown";
import "vue-simple-markdown/dist/vue-simple-markdown.css";
import { VueMasonryPlugin } from "vue-masonry";
Vue.use(VueSimpleMarkdown);
Vue.use(VueMasonryPlugin);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
