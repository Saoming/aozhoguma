<template>
  <div>
    <HeaderFull />
    <HeroSection>
      <div class="flex flex-col md:flex-row">
        <div class="flex-grow md:p-8 max-w-2xl leading-7">
          <h1 class="text-6xl font-bold mb-12">About us</h1>
          <div class="md:w-9/12"> 
            <p class="text-2xl mb-12">
              Aozhoguma is a travel blog based in Australia, focused on brands, products, campaigns and interactive experiences. 
            </p>
          </div>
          <svg
            class="mt-6"
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M12 5v13M5 12l7 7 7-7" />
          </svg>
        </div>
        <div class="md:mt-0 mt-6 h-auto">
          <img src="http://www.staging.wp.local/australia-guy/wp-content/uploads/2021/02/about.svg" alt="" class="w-full" />
        </div>
      </div>
    </HeroSection>
    <div class="max-w-7xl my-12 mx-auto p-8 text-gray-700">
      <div class="video-about -mt-48 mb-12">
        <iframe
          class="rounded-lg"
          width="100%"
          height="600"
          src="https://www.youtube.com/embed/R7WIZmCNnwk"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <div
          class="relative max-w-5xl mx-auto -mt-16 bg-gray-200 p-12 rounded-lg z-40"
        >
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <h2 class="font-extrabold text-2xl">41,296</h2>
              <p>Places</p>
            </div>
            <div>
              <h2 class="font-extrabold text-2xl">7,497</h2>
              <p>Traveler</p>
            </div>
            <div>
              <h2 class="font-extrabold text-2xl">6969</h2>
              <p>Hotels/Villa</p>
            </div>
          </div>
        </div>
      </div>
      <p>
        By supporting Aozhoguma with your time, talents, and generosity, you can
        strengthen the voice of our local children so that they can too reach
        beyond their communities and build a strong Australia.
      </p>
      <p>
        Bibendum hac in quis arcu, suspendisse. Amet, vitae hac lectus ultrices.
        Vel augue id suspendisse blandit volutpat vitae magna orci tristique.
        Cursus et vitae nisl pretium nisl dictum facilisi fames. Magna sit mi
        pulvinar odio imperdiet quis augue euismod sed. Ut sem purus a, elit.
        Pretium, elementum mauris adipiscing donec lobortis pellentesque eu.
        Aliquam vitae in viverra eu est rhoncus magna velit magna. Ornare
        facilisi nulla eu mattis eget feugiat elit aenean. Nibh eleifend posuere
        auctor cursus id massa nunc. Neque, duis odio amet urna eget.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
const paramid = '5';

const About = Vue.extend({
    async asyncData({ $axios }) {
    const api = `http://www.staging.wp.local/australia-guy/wp-json/acf/v3/pages/${paramid}`
    const data = await $axios.$get(api).then( ( response )  => {
      console.log(response);
      return response;
    }).catch(( error ) => {
      console.error(error);
    })
    return { data };
  },
  name: "About",
})

export default About;
</script>