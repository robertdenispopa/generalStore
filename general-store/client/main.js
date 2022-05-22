import Vue from 'vue'

import VueMeteorTracker from 'vue-meteor-tracker';
Vue.use(VueMeteorTracker);

import router from './routes'

import App from '../imports/ui/App.vue'



Meteor.startup(() => {
  new Vue({router,
    el: '#app',
    ...App,
  })
})