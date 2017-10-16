<template>
  <div>
    <!-- 'id' does not have to be a property because there is no way to... -->
    <!-- ...navigate to details of another user. So below will work. -->
    <!-- <h3>Details for User: {{$route.params.id}}</h3> -->

    <h3>Details for User: {{id}}</h3>

    <router-link class="btn btn-success"
                 tag="button"
                 :to="toLink">Edit</router-link>

    <!-- The 'params: {id: id}' is not necessary because '$route.params.id'... -->
    <!-- ...already has the id number; but use it anyway to be safe -->
  </div>
</template>

<script>
  export default {
    props: ['id'],
    data() {
      return {
        toLink: {
          name: 'userEdit',
          params: {id: this.id},
          query: {country: 'us', salary: 100,},
          hash: '#data',    // This passes a hashtag in url but does not scroll to '#data'
                            // Use router's 'scrollBehavior()' in 'main.js'
        },
      };
    },
    beforeRouteEnter(to, from, next) {
      if(true) {
        console.log('Loading component...')
        next();       // Component will not load until this is executed
      } else {
        console.log('Not allowed to load this component')
        next(false);
      }
    },
  };
</script>
