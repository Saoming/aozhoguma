<template>
  <div
    class="grid grid-cols-3 grid-rows-7 grid-flow-row overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
  >
    <div class="col-span-3 row-span-4 p-1 m-1">
      <a href="#">
        <img
          src="https://picsum.photos/640/400/?random"
          alt="Placeholder"
          class="rounded-lg object-cover h-48 w-full"
        />
      </a>
    </div>

    <!-- <div class="col-span-3 row-span-1">
      <div class="flex align-bottom flex-col leading-none p-2 md:p-4">
        <div class="flex flex-row justify-between items-center">
          <a
            class="flex items-center no-underline hover:underline text-black"
            href="#"
          >
            <img
              alt="Placeholder"
              class="block rounded-full"
              src="https://picsum.photos/32/32/?random"
            />
            <span class="ml-2 text-sm"> John Doe </span>
          </a>
        </div>
      </div>
    </div> -->

    <div class="col-span-3 row-span-1">
      <header
        class="flex items-center justify-between leading-tight p-2 md:p-4"
      >
        <h1 class="text-lg">
          <a class="no-underline hover:underline text-black" href="#">
            Title
          </a>
        </h1>
        <p class="text-grey-darker text-sm">9 min ago</p>
      </header>
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