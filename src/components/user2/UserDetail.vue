<template>
  <div>
    <!-- 'id' does not have to be a property because there is no way to... -->
    <!-- ...navigate to details of another user. So below will work. -->
    <!-- <h3>Details for User: {{$route.params.id}}</h3> -->

    <h3>Details for User: {{id}}</h3>

    <router-link class="btn btn-success"
                 tag="button"
                 :to="{name: 'userEdit',
                       params: {id: id},
                       query: {country: 'us', salary: 100,}}">Edit</router-link>

    <!-- The 'params: {id: id}' is not necessary because '$route.params.id'... -->
    <!-- ...already has the id number; but use it anyway to be safe -->
  </div>
</template>

<script>
  export default {
    props: ['id'],
  };
</script>
