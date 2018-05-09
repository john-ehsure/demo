import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store.js'
// Vue.http.options.emulateJSON = true;
// import axios from 'axios'
import {post,fetch,patch,put} from './utils/http'
Vue.prototype.$post=post;
Vue.prototype.$fetch=fetch;
Vue.prototype.$patch=patch;
Vue.prototype.$put=put;
// Vue.prototype.$http = axios

new Vue({
  el: '#app',
  router:router,
  store:store,
  // axios:axios,
  render: h => h(App),
  components: { App }
  
})
