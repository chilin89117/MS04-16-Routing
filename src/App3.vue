<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-md-10 col-md-offset-1">
        <h1>MS04-12 Routes III (Up to lecture 249)</h1>
        <hr>
        <router-view name="header-top"></router-view>

        <!-- Animate router-views just as with components before -->
        <transition name='slide' mode="out-in">
          <router-view></router-view>
        </transition>

        <router-view name="header-bottom"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from './components/Header3.vue';

  export default {
    components: {
      appHeader: Header,
    },
  };
</script>

<style>
  .slide-enter-active {
    animation: slide-in 1s ease-out forwards;
  }

  .slide-leave-active {
    transition: opacity 1s ease;
    opacity: 0;
    animation: slide-out 1s ease-out forwards;
  }

  .slide-leave {
    opacity: 1;
    transform: translateX(0);
  }

  @keyframes slide-in {
    0% {
      transform: translateY(-30px);
    }
    100% {
      transform: translateY(0);
    }
  }

  @keyframes slide-out {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-30px);
    }
  }
</style>
