export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Bandera Blanca',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Es una aplicación que muestra la localización de hogares vulnerables en un solo mapa, es una herramienta para los voluntarios y hogares vulnerables'
      },
      {
        property: 'og:title',
        content: 'Bandera Blanca - es tiempo de ayudarnos'
      },
      {
        property: 'og:description',
        content:
          'Es una aplicación que muestra la localización de hogares vulnerables en un solo mapa, es una herramienta para los voluntarios y hogares vulnerables'
      },
      { property: 'og:image', content: '/static/header-iphone.png' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxt/typescript-build',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/pwa'],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
