<template>
  <div>
    <h3>Edit User {{id}}</h3>
    <hr>
    <p>Country: {{$route.query.country}}</p>
    <p>Salary: {{$route.query.salary}}</p>
  </div>

</template>

<script>
  export default {
    props: ['id'],
  };
</script>
