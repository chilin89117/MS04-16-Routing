<template>
  <div>
    <h3>Please select a User</h3>
    <hr>
    <ul class="list-group">
      <router-link class="list-group-item"
                   tag="li"
                   :to="{name: 'userDetail', params: {id: 101}}">User 101</router-link>
      <router-link class="list-group-item"
                   tag="li"
                   :to="{name: 'userDetail', params: {id: 102}}">User 102</router-link>
      <router-link class="list-group-item"
                   tag="li"
                   :to="{name: 'userDetail', params: {id: 103}}">User 103</router-link>
    </ul>
  </div>
</template>

<style>
  .list-group-item {
    cursor: pointer;
  }
</style>
