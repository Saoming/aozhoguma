<template>
    <header class="absolute left-0 top-0 w-full mx-auto bg-white md:bg-transparent">
        <div class="md:relative w-full flex items-center justify-between px-4 md:px-8 py-8 z-50">
            <div class="flex items-center">
                 <NuxtLink to="/"><span class=" text-4xl font-bold text-black md:text-white">aozhoguma</span> </NuxtLink>
            </div>
            <div>
                <button class="hamburger-menu-bg flex items-center justify-center focus:ring-4 focus:outline-none">
                    <div class="hamburger-menu cursor-pointer">
                        <span></span>
                        <span></span>
                    </div>
                </button>
            </div>
        </div>
    </header>
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