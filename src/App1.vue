<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-md-10 col-md-offset-1">
        <h1>MS04-16-Routing I (Up to lecture 232)</h1>
        <hr>
        <app-header></app-header>
        <!-- Tag that comes with 'vue-router' to load router component -->
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from './components/Header1.vue';

  export default {
    components: {
      appHeader: Header,
    },
  };
</script>
