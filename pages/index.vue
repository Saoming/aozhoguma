<template>
  <div id="app">
    <div class="grid grid-cols-1 md:grid-cols-3 w-full">
      <!-- right section -->
      <div
        class="relative header bg-blue-100 h-auto md:h-screen flex flex-col pt-32 pb-24 md:py-0 px-8 md:px-12 justify-center text-white"
        style="background-size: cover ;">
        <div class="z-50">
          <h1 class="font-bold text-3xl"> This is West Australia</h1>
          <h3 class="text-2xl mb-4"> Your Adventure Awaits</h3>
          <p>Sed placerat maecenas ipsum hendrerit adipiscing felis. Vitae ultrices orci sociis ultrices proin aliquam
            libero lectus. Sem lacus pretium ut vestibulum tortor faucibus felis aliquet nam.</p>
          <button
            class="focus:ring-4 focus:outline-non mt-6 whitespace-nowrap inline-flex items-center justify-center px-3 md:px-5 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-black bg-yellow-300 hover:bg-yellow-400">
            More About Us </button>
        </div>
      </div>
      <!-- left section -->

      <section class="col-span-2 h-screen md:overflow-auto">
        <div class="max-w-6xl mx-auto">
          <HeaderHalf />
          <Search />
          <div class="px-4 md:px-8 py-4">
            <div class="flex items-center justify-between">
              <div>
                <h1 class="font-bold text-2xl">Discover</h1>
                <p class="text-gray-400">Unique activities with local experts</p>
              </div>
              <div>
                <button
                  class="focus:ring-4 focus:outline-none inline-flex items-center justify-center p-2 border border-transparent rounded-full shadow-sm text-base font-medium text-black bg-yellow-300 hover:bg-yellow-400 mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="1.5" stroke-linecap="butt" stroke-linejoin="bevel">
                    <path d="M15 18l-6-6 6-6"></path>
                  </svg>
                </button>
                <button
                  class="focus:ring-4 focus:outline-none inline-flex items-center justify-center p-2 border border-transparent rounded-full shadow-sm text-base font-medium text-black bg-yellow-300 hover:bg-yellow-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="1.5" stroke-linecap="butt" stroke-linejoin="bevel">
                    <path d="M9 18l6-6-6-6"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div class="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div
                class="grid grid-cols-3 grid-rows-7 grid-flow-row overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <div class="col-span-3 row-span-4 p-1 m-1"><a href="#"><img src="https://picsum.photos/640/400/?random"
                      alt="Placeholder" class="rounded-lg object-cover h-48 w-full">
                  </a>
                </div>
                <div class="col-span-3 row-span-1">
                  <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 class="text-lg"><a href="#" class="no-underline hover:underline text-black">
                        Title
                      </a>
                    </h1>
                    <p class="text-grey-darker text-sm">9 min ago</p>
                  </header>
                </div>
              </div>
              <div
                class="grid grid-cols-3 grid-rows-7 grid-flow-row ove+
                8 rflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <div class="col-span-3 row-span-4 p-1 m-1"><a href="#"><img src="https://picsum.photos/640/400/?random"
                      alt="Placeholder" class="rounded-lg object-cover h-48 w-full"></a></div>
                <div class="col-span-3 row-span-1">
                  <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 class="text-lg"><a href="#" class="no-underline hover:underline text-black">
                        Title
                      </a>
                    </h1>
                    <p class="text-grey-darker text-sm">9 min ago</p>
                  </header>
                </div>
              </div>
              <div
                class="grid grid-cols-3 grid-rows-7 grid-flow-row overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <div class="col-span-3 row-span-4 p-1 m-1"><a href="#"><img src="https://picsum.photos/640/400/?random"
                      alt="Placeholder" class="rounded-lg object-cover h-48 w-full"></a></div>
                <div class="col-span-3 row-span-1">
                  <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 class="text-lg"><a href="#" class="no-underline hover:underline text-black">
                        Title
                      </a>
                    </h1>
                    <p class="text-grey-darker text-sm">9 min ago</p>
                  </header>
                </div>
              </div>
            </div>
          </div>
          <!-- Blog -->
          <div class="my-6 px-4 md:px-8 py-4" data-v-7778ca56="">
            <div class="flex items-center justify-between">
              <div>
                <h1 class="font-bold text-2xl">Blog</h1>
                <p class="text-gray-400">Our Experts' recommended reads</p>
              </div>
            </div>
            <div class="mt-6">
              <div class="bg-blue-100 p-6 rounded-lg overflow-hidden">
                <div class="flex flex-col md:flex-row items-center justify-between px-0 md:px-8">
                  <div class="text-lg font-semibold mb-12 md:mb-0">
                    <p>Wondering what to do with your stacks (and stacks) of books? Take a look at our top
                      ideas for travel libraries.</p>
                    <a href="#"
                      class="focus:ring-4 focus:outline-non mt-6 whitespace-nowrap inline-flex items-center justify-center px-3 md:px-5 py-2 border border-transparent rounded-md shadow-sm text-base text-white font-medium bg-gray-600 hover:bg-gray-800">Find
                      out more</a>
                  </div>
                  <div class="-mb-12 -mr-6">
                    <img src="http://www.staging.wp.local/australia-guy/wp-content/uploads/2021/02/img.svg" alt="">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
