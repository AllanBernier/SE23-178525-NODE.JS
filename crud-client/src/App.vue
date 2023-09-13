<template>

  <my-router-link :to="{name: 'Welcome'}" color="btn-primary">
      Welcome
  </my-router-link>

  <my-router-link :to="{name: 'HomePage'}" color="btn-primary">
      Home
  </my-router-link>

  <my-router-link :to="{name: 'CreateProduct'}" color="btn-primary">
      Create Product
  </my-router-link>

  <router-view/>
</template>

<script setup>
import MyRouterLink from './components/MyRouterLink.vue';

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
