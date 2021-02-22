<template>
    <div>
        <HeaderFull />
        <!-- v-bind:heroClass="className" -->
        <HeroSection>
            <div class="flex flex-col md:flex-row">
                <div class="flex-grow md:p-8 max-w-2xl leading-7">
                    <h1 class="text-6xl font-bold mb-12">Latests articles</h1>
                    <div class="md:w-9/12">
                        <p class="text-2xl mb-12">
                            Aliquet non vitae sit purus. Cursus blandit tempor, odio nec tortor tristique. Et nunc sed
                            condimentum lorem odio vitae viverra amet.
                        </p>
                    </div>
                    <svg class="mt-6" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round">
                        <path d="M12 5v13M5 12l7 7 7-7" />
                    </svg>
                </div>
                <div class="md:mt-0 mt-6 h-auto">
                    <img src="http://www.staging.wp.local/australia-guy/wp-content/uploads/2021/02/blog-image.svg"
                        alt="" class="w-full" />
                </div>
            </div>
        </HeroSection>
        <div class="py-8">
            <div class="max-w-7xl mx-auto">
                <div class="mb-8">
                    <!--  Tabs -->
                    <div class="flex">
                        <div class="px-12 py-4 rounded-t-xl bg-black border-t text-white cursor-pointer">POPULAR</div>
                        <div class="px-12 py-4 rounded-t-xl bg-special-2 border border-gray-200 cursor-pointer"> TRAVEL</div>
                        <div class="px-12 py-4 rounded-t-xl bg-special-2 border border-gray-200 cursor-pointer"> CULTURE </div>
                        <div class="px-12 py-4 rounded-t-xl bg-special-2 border border-gray-200 cursor-pointer"> NATURE </div>
                    </div>
                    <!-- Content -->
                    <div class="rounded bg-special-2 w-full py-14">
                        <div class="px-8">

                            <!-- Content for Main Hero Post -->
                            <div>
                            </div>
                            <!--  -->
                        </div>
                    </div>
                </div>
                <!-- See More Post  -->
                <h2 class="text-4xl font-bold mb-8"> See other articles </h2>
                <div class="grid grid-cols-2 gap-8">
                    <!-- Post -->
                    <div class="flex flex-col">
                        <div class="w-full">
                            <img src="https://picsum.photos/700/400" alt="" class="object-cover rounded-t-lg">
                        </div>
                        <div class="bg-special-3 p-4">
                            <!-- time -->
                            <div> Posted 35 seconds ago </div>
                            <h3> Featured </h3>
                            <div>
                                A purus mattis dolor purus turpis scelerisque massa suspendisse vel. Massa est leo
                                facilisi egestas cursus. Risus molestie commodo venenatis, sed vitae pellentesque urna.
                                Proin maecenas imperdiet amet, tortor.
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <Footer />
    </div>
</template>