// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '~/assets/css/water.min.css',
    '~/assets/css/main.css'
  ],
  modules: [
    '@nuxtjs/eslint-module',
    ['@nuxtjs/google-fonts', { families: { 'Open Sans': true, Poppins: true } }]
  ]
})
