<template>
    <div>
        <header :class="headerClass">
            <div :class="headerWrapperClass">
                <div class="flex items-center">
                    <NuxtLink to="/"><span :class="logoClass">aozhoguma</span>
                    </NuxtLink>
                </div>
                <div>
                    <button class="hamburger-menu-bg flex items-center justify-center focus:ring-4 focus:outline-none"
                        @click="isActive = !isActive">
                        <div class="hamburger-menu cursor-pointer">
                            <span></span>
                            <span></span>
                        </div>
                    </button>
                </div>
            </div>
        </header>

        <div>
            <div class="overlay" :class="{ active: isActive }"></div>
            <div class="slide-nav fixed bg-blue-100 w-96 h-screen flex flex-col pt-32 pb-24 md:py-0 px-8 md:px-12 justify-start md:justify-center"
                :class="{ active: isActive }">
                <button @click="isActive = !isActive"
                    class="absolute m-3 right-0 top-0 focus:ring-4 focus:outline-none inline-flex items-center justify-center p-2 border border-transparent rounded-lg hover:bg-blue-500 hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>

                <div class="pb-6">
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
                          <li class="text-2xl mb-3">
                            <NuxtLink to="/faq">Faq</NuxtLink>
                        </li>
                          <li class="text-2xl mb-3">
                            <NuxtLink to="/gallery">Gallery</NuxtLink>
                        </li>
                        <li class="text-2xl mb-3">
                            <NuxtLink to="/contact-us">Contact Us</NuxtLink>
                        </li>
                        <li class="text-2xl mb-3">
                            <NuxtLink to="/login">Login</NuxtLink>
                        </li>
                        <li class="text-2xl mb-3">
                            <NuxtLink to="/register">Register</NuxtLink>
                        </li>
                    </ul>
                </div>

            </div>
        </div>

    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    props: {
        headerClass: {
            type: String,
            default: "max-w-screen-2xl bg-white mx-auto"
        },
        headerWrapperClass: {
            type: String,
            default: "absolute left-0 top-0 md:relative w-full flex items-center justify-between py-8 z-50"
        },
        logoClass: {
            type: String,
            default: "text-4xl font-bold text-white md:text-black"
        }
    },
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

})
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