<template>
    <header class="max-w-screen-2xl bg-white mx-auto">
        <div class="absolute left-0 top-0 md:relative w-full flex items-center justify-between py-8 z-50">
            <div class="flex items-center">
                 <NuxtLink to="/"><span class=" text-4xl font-bold text-white md:text-black">aozhoguma</span> </NuxtLink>
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