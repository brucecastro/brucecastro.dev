// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '~/assets/css/water.min.css',
    '~/assets/css/main.css'
  ],
  components: [
    { path: '~/node_modules/vue-typewriter-effect/dist' },
    { path: '~/components' }
  ],
  modules: [
    '@nuxtjs/eslint-module',
    ['@nuxtjs/google-fonts', { families: { 'Open Sans': true, Sora: true } }]
  ],
  plugins: [
    { src: '~/plugins/aos', mode: 'client' }
  ]
})
