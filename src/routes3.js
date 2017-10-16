import Home from './components/Home.vue';
import Header from './components/Header3.vue';

// Lazy loading of components for Webpack (asynchronously)
// Group the 1st two components under name 'userGroup'
const User = resolve => {
  require.ensure(['./components/user3/User.vue'], () => {
    resolve(require('./components/user3/User.vue'));
  }, 'userGroup');
};

const UserStart = resolve => {
  require.ensure(['./components/user3/UserStart.vue',], () => {
    resolve(require('./components/user3/UserStart.vue',));
  }, 'userGroup');
};

const UserDetail = resolve => {
  require.ensure(['./components/user3/UserDetail.vue'], () => {
    resolve(require('./components/user3/UserDetail.vue'));
  });
};

const UserEdit = resolve => {
  require.ensure(['./components/user3/UserEdit.vue'], () => {
    resolve(require('./components/user3/UserEdit.vue'));
  });
};

export const routes = [
  {
    path: '',
    // component: Home,
    name: 'home',
    components: {
      default: Home,
      'header-top': Header,
    },
  },
  {
    path: '/user3',
    // component: User,
    components: {
      default: User,
      'header-bottom': Header,
    },
    children: [
      {
        path: '',
        component: UserStart,
        props: true,
        name: 'userList',
      },
      {
        path: ':id',
        component: UserDetail,
        props: true,
        name: 'userDetail',
        beforeEnter: (to, from, next) => {
          console.log('Protecting "userDetail" route!');
          next();
        },
      },
      {
        path: ':id/edit',
        component: UserEdit,
        props: true,
        name: 'userEdit',
      },
    ],
  },
  {
    path: '/redirect-me',
    redirect: {name: 'userList'},
  },
  {
    path: '*',        // Use wildcard for catch-all routing
    redirect: {name: 'home'},
  },
];
