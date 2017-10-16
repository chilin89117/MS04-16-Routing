import User from './components/user1/User.vue';
import Home from './components/Home.vue';

export const routes = [
  {path: '', component: Home},
  {path: '/user1/:id', component: User, props: true},
  // When 'props' is set to 'true', '$route.params' will be set as component 'props'
];
