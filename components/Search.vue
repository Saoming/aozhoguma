<template>
    <form id="searchform" method="get">
        <div class="relative -mt-12 mb-6 md:mb-0 md:mt-0 px-4 md:px-8 py-4 z-50">
            <div
                class="bg-white flex items-center pl-6 pr-2 focus:ring-2 w-full sm:text-sm border border-gray-300 rounded-full">
                <input :placeholder="`${this.$props.placeholderText}`" class="flex-grow py-4 focus:outline-none"
                    value="">
                <button type="submit"
                    class="focus:ring-4 focus:outline-none inline-flex items-center justify-center p-2 border border-transparent rounded-full shadow-sm text-base font-medium text-black bg-yellow-300 hover:bg-yellow-400"><svg
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="1.5" stroke-linecap="butt" stroke-linejoin="bevel">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg></button>
            </div>
        </div>
    </form>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    props: {
        placeholderText: {
            type: String,
            default: "Please Type the Keyword Here..."
        }
    },
})
</script>
