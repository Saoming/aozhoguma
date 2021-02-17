<template>
  <div>
    <div class="overlay" :class="{ active: isActive }"></div>
    <div
      class="slide-nav fixed bg-blue-100 w-96 h-screen flex flex-col pt-32 pb-24 md:py-0 px-8 md:px-12 justify-start md:justify-center"
      :class="{ active: isActive }"
    >
      <button
        @click="isActive = !isActive"
        class="absolute m-3 right-0 top-0 focus:ring-4 focus:outline-none inline-flex items-center justify-center p-2 border border-transparent rounded-lg hover:bg-blue-500 hover:text-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>

      <div class="pb-6 border-b-2 border-gray-800">
        <ul class="slide-nav__link">
          <li class="text-2xl mb-3">
            <NuxtLink to="/">Home</NuxtLink>
          </li>
          <li class="text-2xl mb-3">
            <NuxtLink to="/about">About</NuxtLink>
          </li>
          <li class="text-2xl mb-3">
            <NuxtLink to="/blog">Blog</NuxtLink>
          </li>
        </ul>
      </div>
    </div>

    <!-- fixed md:relative inset-0 -->
    <div
      class="absolute left-0 top-0 md:relative w-full flex items-center justify-between px-4 md:px-8 py-4 z-40"
    >
      <div class="flex items-center">
        <span
          class="bg-black text-white rounded-full w-6 h-6 flex items-center justify-center mr-4 p-4"
          >a</span
        >
        <span class="text-white md:text-black">aozhoguma</span>
      </div>
      <div>
        <button
          @click="isActive = !isActive"
          aria-label="Menu"
          class="focus:ring-4 focus:outline-none flex items-centner bg-blue-500 text-white p-3 rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="butt"
            stroke-linejoin="bevel"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
    };
  },
  watch: {
    $route() {
      this.isActive = false;
    },
  },
};
</script>

<style>
.slide-nav {
  top: 0;
  right: -100%;
  transition: 0.5s;
  z-index: 999;
}
.slide-nav.active {
  right: 0;
}
.slide-nav__link li a {
  font-family: "Josefin Sans", sans-serif;
}
.slide-nav__link li a.nuxt-link-exact-active {
  font-weight: bold;
}
.overlay {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.85);
  z-index: 99;
  visibility: hidden;
  opacity: 0;
  transition: 0.5s;
}
.overlay.active {
  visibility: visible;
  opacity: 1;
}
</style>