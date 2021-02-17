export default {
  buildModules: ['@nuxt/typescript-build', '@nuxtjs/tailwindcss'],
  plugins: ['~/plugins/composition-api'],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    config: {}
  },
  css: ['@/assets/css/global.css'],
  components: true
}