<template>
  <div>
    1111
  </div>
</template>

<script lang="ts">
import { onMounted, defineComponent } from 'vue';

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup() {
    onMounted(() => {
      console.log('client');
    });

    return {}
  }
})
</script>

