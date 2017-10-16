// All the components are loaded eagerly (see 'routes3.js' for lazy loading)
import User from './components/user2/User.vue';
import UserStart from './components/user2/UserStart.vue';
import UserDetail from './components/user2/UserDetail.vue';
import UserEdit from './components/user2/UserEdit.vue';
import Home from './components/Home.vue';
import Header from './components/Header2.vue';

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
    path: '/user2',
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
