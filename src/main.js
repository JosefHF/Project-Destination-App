import Vue from "vue";
import App from "./App.vue";
import Analytics from "vue-analytics";
import router from "./router/router";
import store from "./store/store";
import Buefy from 'buefy';
import Res from "vue-resource";
import "./registerServiceWorker";
import AOS from 'aos'
import 'aos/dist/aos.css'


Vue.use(Buefy);
Vue.use(Res);
Vue.use(Analytics, {
  id: "UA-126895633-1"
})

Vue.config.productionTip = false;

new Vue({
  created () {
    AOS.init()
  },
  router,
  store,
  render: h => h(App),
}).$mount("#app");
