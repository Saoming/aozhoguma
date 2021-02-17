<template>
  <div class="px-4 md:px-8 py-4">
    <div class="flex items-center justify-between">
      <div>
        <h1 class="font-bold text-2xl">Discover</h1>
        <p class="text-gray-400">Unique activities with local experts</p>
      </div>
      <div class="flex items-center flex-nowrap">
        <button
          class="focus:ring-4 focus:outline-none inline-flex items-center justify-center p-2 border border-transparent rounded-full shadow-sm text-base font-medium text-black bg-yellow-300 hover:bg-yellow-400 mr-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="butt"
            stroke-linejoin="bevel"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <button
          class="focus:ring-4 focus:outline-none inline-flex items-center justify-center p-2 border border-transparent rounded-full shadow-sm text-base font-medium text-black bg-yellow-300 hover:bg-yellow-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="butt"
            stroke-linejoin="bevel"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </div>
    <div class="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      <Cards />
      <Cards />
      <Cards />
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