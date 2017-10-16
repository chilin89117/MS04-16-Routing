<template>
  <div>
    <h3>Edit User {{id}}</h3>
    <hr>
    <p>Country: {{$route.query.country}}</p>
    <p>Salary: {{$route.query.salary}}</p>
    <button class="btn btn-success" @click="confirmed=true">Confirm</button>
    <hr>
    <div class="box">A box to take up space</div>
    <br>
    <p id="data"><strong>This paragraph has 'id="data"'.</strong> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  </div>
</template>

<script>
  export default {
    props: ['id'],
    data() {
      return {
        confirmed: false,
      };
    },
    beforeRouteLeave(to, from, next) {
      if(this.confirmed) {
        console.log('"confirmed" is set to true, leaving component...');
        next();
      } else {
        if(confirm('Are you sure?')) {
          console.log('"confirmed" is not set to true, but leaving component');
          next();
        } else {
          console.log('Not leaving the component');
          next(false);
        }
      }
    },
  };
</script>

<style scoped>
  .box {
    height: 900px;
    background-color: lightblue;
  }
</style>
