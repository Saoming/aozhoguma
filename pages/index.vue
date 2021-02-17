<template>
  <div>
    <div class="grid grid-cols-1 md:grid-cols-3 w-full">
      <no-ssr>
        <vue-tiny-slider v-bind="tinySliderOptions">
          <div
            class="relative header bg-blue-100 h-auto md:h-screen flex flex-col pt-32 pb-24 md:py-0 px-8 md:px-12 justify-center text-white">
            <img src="https://picsum.photos/id/1002/800/900" alt="Placeholder"
              class="top-0 left-0 absolute object-cover h-full w-full" />

            <div class="relative max-w-md mx-auto md:h-screen flex flex-col justify-center z-50">
              <h1 class="font-bold text-3xl">This is West Australia</h1>
              <h2 class="text-2xl mb-4">Your Adventure Awaits</h2>
              <p>
                Sed placerat maecenas ipsum hendrerit adipiscing felis. Vitae
                ultrices orci sociis ultrices proin aliquam libero lectus. Sem
                lacus pretium ut vestibulum tortor faucibus felis aliquet nam.
              </p>
              <a href="#"
                class="focus:ring-4 focus:outline-non mt-6 font-bold whitespace-nowrap inline-flex items-center justify-center px-3 md:px-5 py-2 border border-transparent rounded-md shadow-sm text-base text-black bg-yellow-300 hover:bg-yellow-400">Find
                out more</a>
            </div>
          </div>

          <div
            class="relative header bg-blue-100 h-auto md:h-screen flex flex-col pt-32 pb-24 md:py-0 px-8 md:px-12 justify-center text-white">
            <img src="https://picsum.photos/seed/picsum/800/900" alt="Placeholder"
              class="top-0 left-0 absolute object-cover h-full w-full" />

            <div class="relative max-w-md mx-auto md:h-screen flex flex-col justify-center z-50">
              <h1 class="font-bold text-3xl">Another slider</h1>
              <h2 class="text-2xl mb-4">Subtitlte here</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis libero corporis, laboriosam qui animi enim reiciendis
                fuga natus placeat eveniet temporibus eligendi, ipsa,
                praesentium nemo mollitia. Aliquid saepe cupiditate laudantium?
              </p>
            </div>
          </div>
        </vue-tiny-slider>
      </no-ssr>

      <!-- order-first md:order-none -->
      <div class="col-span-2 h-screen md:overflow-auto">
        <div class="max-w-6xl mx-auto">
          <HeaderFull />
          <Search />
          <CardSection />
          <BlogSection />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

const Index = Vue.extend({
  name: "Index",
  head() {
    return {
        link: [{
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.1/tiny-slider.css",
        }, ],
        bodyAttrs: {
          class: "home",
        },
    };
  },
  data(){
    return {
        tinySliderOptions: {
          mouseDrag: true,
          loop: true,
          items: 1,
          swipeAngle: 45,
          controlsText: [
            '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="butt" stroke-linejoin="bevel" data-v-1c6aabbe=""><path d="M15 18l-6-6 6-6" data-v-1c6aabbe=""></path></svg>',
            '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="butt" stroke-linejoin="bevel" data-v-1c6aabbe=""><path d="M9 18l6-6-6-6" data-v-1c6aabbe=""></path></svg>',
          ],
        },
    };
  }
});

export default Index;
</script>


<style>
  .header:before {
    position: absolute;
    left: 0;
    top: 0;
    content: "";
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.45);
    z-index: 2;
  }

  .tns-outer {
    position: relative;
  }

  .tns-controls {
    bottom: 0;
    right: 0;
    width: 100%;
    z-index: 99;
    @apply absolute md:right-0 md:bottom-0 w-full hidden md:flex items-center justify-end mt-10 md:mt-0 py-0 md:py-8 px-0 md:px-12;
  }

  .tns-controls>button {
    @apply focus:ring-4 focus:outline-none inline-flex items-center justify-center p-2 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-gray-800 hover:bg-gray-800 ml-6;
  }

  .tns-nav {
    display: none;
  }
</style>