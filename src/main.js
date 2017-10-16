import Vue from 'vue';

// import App from './App1.vue';  // Up to lecture 232
// import App from './App2.vue';  // Up to lecture 240
import App from './App3.vue';

import VueRouter from 'vue-router';

// import {routes} from './routes1';  // Up to lecture 232
// import {routes} from './routes2';  // Up to lecture 240
import {routes} from './routes3';

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history',

  // Scroll to 'savedPosition' if user used the 'back' button
  // Scroll to hashtag if it exists in the url
  // Otherwise scroll to top
  scrollBehavior(to, from, savedPosition) {
    if(savedPosition) {
      return savedPosition;
    }
    if(to.hash) {
      return {selector: to.hash};
    }
    return {x: 0, y:0};
  },
});

// Execute before each routing action
// (see 'routes3.js' for protecting specific routes)
// (see 'UserDetail.vue' for protecting specific component)
router.beforeEach((to, from, next) => {
  console.log('Global "beforeEach" router function');
  // Must include this to allow routing to continue (argments can be a path or object)
  next();
});

new Vue({
  el: '#app',
  router,
  render: h => h(App),
})
