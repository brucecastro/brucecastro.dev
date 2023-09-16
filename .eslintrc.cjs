module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    '@nuxtjs/eslint-config-typescript'
  ],
  rules: {
    quotes: [2, 'single', { avoidEscape: true }],
    'vue/multi-word-component-names': 'off'
  }
}
