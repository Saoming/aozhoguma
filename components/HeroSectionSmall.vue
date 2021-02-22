<template>
  <div class="py-24 px-24 h-full md:px-8 bg-special">
    <div class="max-w-7xl mx-auto">
      <slot />
    </div>
  </div>
</template>


<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    data() {
    return {
      isDisabled: false,
    };
  },
})
</script>