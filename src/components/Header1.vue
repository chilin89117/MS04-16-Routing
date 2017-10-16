<template>
  <div>
    <ul class="nav nav-pills">
      <!-- No '<a href="">' tags so requests won't be sent to the server -->
      <!-- Use '<router-link>' tag provided by 'vue-router' instead -->
      <!-- '<router-link>' tag will still be replaced by '<a href="">' in DOM -->


      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/user1/101">User 101</router-link></li>
      <li><router-link to="/user1/102">User 102</router-link></li>



      <!-- 'class="router-link-active"' is added to the '<a>' tag above, not to the '<li>' -->
      <!-- Surround '<li><a>' tags with '<router-link>' to attach 'active' class -->
      <router-link to="/" tag="li" active-class="active" exact><a>Home</a></router-link>
      <router-link to="/user1/101" tag="li" active-class="active"><a>User 101</a></router-link>
      <router-link to="/user1/102" tag="li" active-class="active"><a>User 102</a></router-link>
    </ul>
    <h3>Differences in tags and attributes:</h3>
    <hr>
    <div>
      <img src="../assets/Route-Links-1.png" width="600" height="240">
    </div>
    <div>
      <img src="../assets/Route-Links-2.png" width="600" height="240">
    </div>
  </div>
</template>

<script>
  export default {
  };
</script>
