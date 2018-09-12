import { store } from './store';

import App from './App.vue';
import Vue from 'vue';

new Vue({
  store,
  el: '#app',
  render: h => h(App)
});
