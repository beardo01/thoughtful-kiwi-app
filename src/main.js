import 'onsenui';
import Vue from 'vue';
import Vuex from 'vuex';;
import VueOnsen from 'vue-onsenui';
import router from './router'

// Onsen UI Styling and Icons
require('onsenui/css-components-src/src/onsen-css-components.css');
require('onsenui/css/onsenui.css');

import App from './App.vue';

Vue.use(VueOnsen);
Vue.use(Vuex);

new Vue({
  el: '#app',
  router,
  template: '<app></app>',
  components: { App }
});
