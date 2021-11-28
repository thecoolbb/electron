<template>
  <div>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <HelloWorld />
  </div>
</template>

<script lang="ts">
import { HelloWorld } from 'client';
import { defineComponent } from 'vue';

// console.log('HelloWorld', HelloWorld.setup({msg: 'aaaa'}, {}));

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld
  }
})
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
