<template>
<!-- class=""  -->
  <div :class="heroClass" >
    <div class="max-w-7xl mx-auto">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    props: {
        heroClass: {
            type: String,
            default: "py-24 px-12 h-full md:h-75 md:py-4 md:px-8 bg-special flex items-center"
        }
    },
})
</script>