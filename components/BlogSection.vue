<template>
  <div class="my-6 px-4 md:px-8 py-4">
    <div class="flex items-center justify-between">
      <div>
        <h1 class="font-bold text-2xl">Blog</h1>
        <p class="text-gray-400">Our Experts' recommended reads</p>
      </div>
    </div>
    <div class="mt-6">
      <div class="bg-blue-100 p-6 rounded-lg overflow-hidden">
        <div
          class="flex flex-col md:flex-row items-center justify-between px-0 md:px-6"
        >
          <div class="text-lg font-semibold mb-12 md:mb-0">
            <p>
              Wondering what to do with your stacks (and stacks) of books? Take
              a look at our top ideas for travel libraries.
            </p>
            <a
              href="#"
              class="focus:ring-4 focus:outline-non mt-6 font-bold whitespace-nowrap inline-flex items-center justify-center px-3 md:px-5 py-2 border border-transparent rounded-md shadow-sm text-base text-white bg-gray-600 hover:bg-gray-800"
              >Read more</a
            >
          </div>
          <div class="-mb-12 -mr-6">
            <img src="http://www.staging.wp.local/australia-guy/wp-content/uploads/2021/02/img.svg" alt="" />
          </div>
        </div>
      </div>
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