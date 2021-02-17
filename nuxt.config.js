export default {
  buildModules: ['@nuxt/typescript-build', '@nuxtjs/tailwindcss'],
  plugins: [
    { src: '~/plugins/composition-api'},
    { src: '~/plugins/vue-tiny-slider.js', mode: 'client' } // client side
  ],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    config: {}
  },
  css: ['@/assets/css/global.css'],
  components: true
}