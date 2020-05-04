export default {
  mode: 'spa',
  /*
   ** Router
  */
  router: {
    middleware: 'i18n'
  },
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
  plugins: ['~/plugins/i18n.js'],
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
  modules: ['@nuxtjs/pwa', '@nuxtjs/firebase'],

  firebase: {
    useOnly: [
      'auth',
      'firestore',
      'performance'
    ],
    config: {
      development: {

      },
      production: {

      }
    },
    customEnv: false,
    onFirebaseHosting: true,
    services: {
      auth: {
        persistence: 'local',
        initialize: {
          onAuthStateChangedMutation: "SET_AUTH_USER",
          onAuthStateChangedAction: null,
        },
        ssr: false
      },
      firestore: true,
      messaging: {
        createServiceWorker: true
      }
    }

  },
  pwa: {
    workbox: {
      // by default the workbox module will not install the service worker in dev environment to avoid conflicts with HMR
      // only set this true for testing and remember to always clear your browser cache in development
      dev: process.env.NODE_ENV === 'development'
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) { }
  }
}
