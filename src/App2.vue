<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-md-10 col-md-offset-1">
        <h1>MS04-16-Routing II (Up to lecture 240)</h1>
        <hr>

        <!-- This always places 'Header2.vue' on top -->
        <!-- <app-header></app-header> -->

        <!-- This is the root router -->
        <!-- Router for nested routes is in 'User.vue' -->
        <!-- The middle one is the default, the other 2 are named router views -->
        <router-view name="header-top"></router-view>
        <router-view></router-view>
        <router-view name="header-bottom"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from './components/Header2.vue';

  export default {
    components: {
      appHeader: Header,
    },
  };
</script>
