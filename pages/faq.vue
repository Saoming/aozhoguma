<template>
<div>
    <HeaderFull />
    <HeroSectionSmall>
        <div class="text-center">
            <h1 class="text-6xl font-bold"> Frequently Asked Question </h1>
        </div>
    </HeroSectionSmall>
    <div class="max-w-7xl my-12 mx-auto p-8">
        <div class="-mt-32 mb-12">
        <Search v-bind:placeholderText="placeholder" />
        </div>
        <!-- Faq Content -->
        <FaqAccordions />
        <FaqAccordions />
        <FaqAccordions />

    </div>
    <Footer />
</div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    data() {
        return { placeholder: "Search your keyword here..."}
    }
})
</script>