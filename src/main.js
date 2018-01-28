import 'onsenui';
import Vue from 'vue';
import VueOnsen from 'vue-onsenui';

import router from './router';
import { store } from './store';

// Onsen UI Styling and Icons
require('onsenui/css-components-src/src/onsen-css-components.css');
require('onsenui/css/onsenui.css');

import App from './App.vue';

Vue.use(VueOnsen);

// Initalize app
new Vue({
  el: '#app',
  router,
  store,
  template: '<app></app>',
  components: { App }
});