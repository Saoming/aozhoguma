export default {
  buildModules: ['@nuxt/typescript-build', '@nuxtjs/tailwindcss'],
  modules: ['@nuxtjs/axios'],
  axios: {
    // extra config e.g
 },
  plugins: [
    { src: '~/plugins/composition-api'},
    { src: '~/plugins/vue-tiny-slider.js', mode: 'client' }, // client side
    { src: '~/plugins/video-plyr', mode: 'client' },
  ],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    config: {}
  },
  css: ['@/assets/css/global.css'],
  components: true,
  build: {
    analyze: true,
  }
}