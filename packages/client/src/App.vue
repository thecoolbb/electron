<template>
  <div id="APP">
    <img alt="Vue logo" src="./assets/logo.png">
    <router-view></router-view>
    <!-- <HelloWorld></HelloWorld> -->
  </div>
</template>

<script lang="ts">
// import HelloWorld from './components/HelloWorld.vue'
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  components: {
    // HelloWorld
  },
  setup() {

  }
});
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
