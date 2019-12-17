import Vue from 'vue';
import Vuelidate from 'vuelidate'
import VueAnalytics from 'vue-analytics'

import 'jquery/src/jquery';
import 'bootstrap/js/dist/alert';
import 'bootstrap/js/dist/button';
import 'bootstrap/js/dist/collapse';
import 'bootstrap/js/dist/dropdown';
import 'bootstrap/js/dist/index';
// import 'bootstrap/js/dist/modal';
// import 'bootstrap/js/dist/tab';
import 'bootstrap/js/dist/util';

// import local dependencies
import App from './App.vue';
import router from './router';
import store from './store';

require('./assets/styles/main.scss');

Vue.use(Vuelidate)
Vue.use(VueAnalytics, {
  id: 'UA-101406985-1',
  router,
  autoTracking: {
    exception: true, // Error exceptions tracking?
  },
  debug: {
    enabled: process.env.NODE_ENV !== 'production',
    sendHitTask: process.env.NODE_ENV === 'production', // avoid sending data to your domain during development
  },
})

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

/* Global data */
Vue.prototype.$siteName = 'William Clapp';
Vue.prototype.$siteUrl = 'https://clapp.uk.net';
Vue.prototype.$handleTwitter = '@wadclapp';
Vue.prototype.$handleLinkedIn = 'wadclapp';
