<template>
  <div>
    <h1>The User Page</h1>
    <br>
    <button class="btn btn-primary" @click="navigateToHome">Go to Home</button>
    <br><br>

    <!-- Router for nested routes -->
    <router-view></router-view>

    <!-- The '<hr>' is to separate router view that may appear at the bottom -->
    <hr>
  </div>
</template>

<script>
  export default {
    methods: {
      navigateToHome() {
        // this.$router.push({path: '/',});
        this.$router.push({name: 'home'});
      },
    },
  };
</script>
