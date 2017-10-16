<template>
  <div>
    <h1>The User Page</h1>
    <hr>
    <h3>User ID from routing parameter is: {{id}}</h3>
    <br>
    <button class="btn btn-primary" @click="navigateToHome">Go to Home</button>
    <br><br>
  </div>
</template>

<script>
  // See https://router.vuejs.org/en/essentials/passing-props.html

  export default {
    props: ['id'],
    methods: {
      navigateToHome() {
        // this.$router.push({path: '/',});
        this.$router.push('/');
      },
    },
  };
</script>
