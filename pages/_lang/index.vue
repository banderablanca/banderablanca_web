<template>
  <div>
    <div>
      <div class="overflow-hidden w-full absolute top-0 left-0 z-0">
        <!-- waves -->
        <div class="bg-indigo-400 h-48 -mx-10"></div>
        <svg class="pt-48 -mx-10 h-full -my-1 bg-indigo-400" viewBox="0 0 1440 320">
          <path
            class="fill-current text-indigo-100"
            fill-opacity="1"
            d="M0,32L26.7,53.3C53.3,75,107,117,160,160C213.3,203,267,245,320,234.7C373.3,224,427,160,480,128C533.3,96,587,96,640,122.7C693.3,149,747,203,800,224C853.3,245,907,235,960,197.3C1013.3,160,1067,96,1120,80C1173.3,64,1227,96,1280,112C1333.3,128,1387,128,1413,128L1440,128L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"
          />
        </svg>
        <div>
          <div class="bg-indigo-100"></div>
          <svg class="h-full" viewBox="0 0 1440 280">
            <path
              class="fill-current text-indigo-100"
              fill-opacity="1"
              d="M0,128L34.3,122.7C68.6,117,137,107,206,112C274.3,117,343,139,411,170.7C480,203,549,245,617,261.3C685.7,277,754,267,823,245.3C891.4,224,960,192,1029,154.7C1097.1,117,1166,75,1234,48C1302.9,21,1371,11,1406,5.3L1440,0L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
            />
          </svg>
        </div>
      </div>
    </div>

    <!--Main-->
    <div class="container px-6 mx-auto items-center min-h-screen relative">
      <div
        class="flex flex-col w-full lg:py-8 justify-center lg:items-center overflow-y-hidden text-white"
      >
        <h1
          class="py-4 text-3xl md:text-5xl font-black leading-tight text-center md:text-left slide-in-bottom-h1"
        >{{ $t('slogan') }}</h1>
        <p
          class="leading-normal text-base md:text-lg text-center md:text-left slide-in-bottom-subtitle"
        >{{ $t('home.description_line2') }}</p>
        <p
          class="leading-normal text-base md:text-lg text-center md:text-left slide-in-bottom-subtitle"
        >{{ $t('home.description_line1') }}</p>
        <p
          class="leading-normal text-base md:text-lg mb-2 text-center md:text-left slide-in-bottom-subtitle"
        >{{ $t('home.description_line3') }}</p>

        <p
          class="text-indigo-800 font-bold pb-2 lg:pb-6 text-center md:text-left fade-in"
        >{{ $t('home.download') }}</p>
        <div class="flex w-full justify-center md:justify-center pb-24 lg:pb-0 fade-in">
          <a href="https://play.google.com/store/apps/details?id=org.banderablanca" target="_blank">
            <img src="~/assets/img/Play Store.svg" class="h-12 bounce-top-icons" />
          </a>
          <div class="flex-wrap items-center text-center justify-center lg:px-8 pl-4">
            <a
              href="https://apps.apple.com/us/app/bandera-blanca/id1507865656?l=es&ls=1"
              target="_blank"
            >
              <img src="~/assets/img/App Store.svg" class="h-12 pr-4 bounce-top-icons" />
            </a>
          </div>
        </div>
      </div>

      <!--Right Col-->
      <div class="w-full m-auto">
        <h1
          class="font-bold text-center text-white text-2xl lg:text-4xl leading-tight pt-4 pb-4"
        >Últimas banderas alzadas</h1>
        <div class="lg:flex">
          <div class="w-full lg:w-1/4 p-2" v-for="flag in flags.slice(0, 4)" :key="flag.id">
            <FlagCard :flag="flag" />
          </div>
        </div>

        <div class="text-center py-6 lg:py-12">
          <nuxt-link
            to="/banderas"
            class="bg-white hover:bg-gray-100 text-gray-800 font-semibold p-4 rounded shadow-xl"
          >Ver toda las banderas</nuxt-link>
        </div>
      </div>
    </div>
    <!-- description -->
    <section class="relative">
      <div
        class="w-full lg:w-1/2 mx-auto flex flex-col justify-center items-start p-8 items-center lg:items-start text-center lg:pb-8"
      >
        <h1 class="my-4 font-bold text-3xl md:text-5xl w-full">{{ $t('home.how_work') }}</h1>
        <p class="leading-normal mb-4 text-gray-700">{{ $t('home.how_work_description') }}</p>
      </div>
      <div
        class="font-sans container m-auto flex flex-col lg:flex-row justify-center py-8 pt-0 lg:pb-16"
      >
        <div
          class="order-2 lg:order-1 p-4 w-full lg:w-1/4 flex flex-col items-center lg:items-end justify-center text-center lg:text-right ml-0 lg:ml-8 lg:mt-8"
        >
          <div class="flex-col flex items-center lg:items-end p-4 lg:mb-4 rounded-lg bg-white">
            <div
              class="w-16 h-16 rounded-full border border-red-400 shadow-lg mb-2 flex items-center justify-center"
            >
              <img src="~/assets/img/logo.svg" class="w-full p-5" />
            </div>
            <h2 class="text-black mb-2 font-bold">{{ $t('home.find_flag') }}</h2>
            <p class="text-gray-700 leading-normal">{{ $t('home.find_flag_description') }}</p>
          </div>
          <div class="flex-col flex items-center lg:items-end p-4 rounded-lg bg-white">
            <div class="w-16 h-16 rounded-full border border-red-400 shadow-lg mb-2">
              <img src="~/assets/img/people-arrows-solid.svg" class="w-full p-5" />
            </div>
            <h2 class="text-black mb-2 font-bold">{{ $t('home.community') }}</h2>
            <p class="text-gray-700 leading-normal">{{ $t('home.community_description') }}</p>
          </div>
        </div>
        <div
          class="order-1 lg:order-2 w-full lg:w-1/2 max-w-sm m-auto mb-6 lg:mb-0 lg:block hidden"
        >
          <img src="~/assets/img/features-app.jpg" class="px-8" />
        </div>
        <div
          class="order-last w-full p-4 lg:w-1/4 flex flex-col items-center lg:items-start justify-center text-center lg:text-left mt-0 lg:mt-8 mr-8"
        >
          <div class="flex-col flex items-center lg:items-start p-4 rounded-lg bg-white lg:mb-4">
            <div class="w-16 h-16 rounded-full border border-red-400 shadow-lg mb-2">
              <img src="~/assets/img/comments-regular.svg" class="w-full p-5" />
            </div>
            <h2 class="text-black mb-2 font-bold">{{ $t('home.comment_flag') }}</h2>
            <p class="text-gray-700 leading-normal">{{ $t('home.comment_flag_description') }}</p>
          </div>
          <div class="flex-col flex items-center lg:items-start p-4 rounded-lg bg-white">
            <div class="w-16 h-16 rounded-full border border-red-400 shadow-lg mb-2">
              <img src="~/assets/img/flag-regular.svg" class="w-full p-5" />
            </div>
            <h2 class="text-black mb-2 font-bold">{{ $t('home.raise_flag') }}</h2>
            <p class="text-gray-700 leading-normal">{{ $t('home.raise_flag_description') }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="relative py-5">
      <!-- <svg
        class="w-full"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 1920 413"
        version="1.1"
      >
        <g id="Home" transform="translate(0.000000, -586.000000)">
          <g id="Hero">
            <g id="Path-2-+-Path-Mask">
              <g id="Group" transform="translate(-63.000000, 586.000000)">
                <path
                  d="M393.986353,104.002115 C611.751741,280.771326 826.750438,333.898292 1038.98244,263.383013 C1357.33045,157.610094 1693.65558,141.445419 1823.74803,198.773589 C1910.47633,236.992368 1975.91374,286.719655 2020.06026,347.955449 L2020.06026,419.610091 L393.986353,386.051642 L393.986353,104.002115 Z"
                  id="Path-2"
                  fill="#E0EBFA"
                />
                <path
                  d="M0.833360949,13.6818689 C176.343826,-31.535628 391.146641,43.5405775 645.241805,238.910486 C1026.38455,531.965348 1091.59247,123.418795 1546.50399,205.018226 C1849.77834,259.417847 2001.41552,334.008403 2001.41552,428.789896 L0.833360949,428.789896 L0.833360949,13.6818689 Z"
                  id="Path"
                  fill="#ebf4ff"
                />
              </g>
            </g>
          </g>
        </g>
      </svg>-->
      <div class="relative bg-indigo-100 lg:py-16 py-8">
        <div class="absolute top-0 w-full h-full bg-fixed bg_map"></div>
        <div
          class="relative pb-4 lg:pb-16 lg:pt-16 font-sans container m-auto flex flex-col-reverse lg:flex-row text-center lg:text-left sm:items-center text-gray-700"
        >
          <div
            class="w-full lg:w-1/2 flex flex-col justify-center items-start p-8 items-center lg:items-start pt-0"
          >
            <h1 class="my-4 font-bold text-3xl md:text-5xl w-full">{{ $t('home.register_flag') }}</h1>
            <p class="leading-normal mb-4">{{ $t('home.register_flag_description') }}</p>
            <ul class="list-inside">
              <li class="py-2 flex">- {{ $t('home.register_flag_step1') }}</li>
              <li class="py-2 flex">- {{ $t('home.register_flag_step2') }}</li>
              <li class="py-2 flex">- {{ $t('home.register_flag_step3') }}</li>
            </ul>
          </div>
          <div class="w-full lg:w-1/2">
            <!-- <img src="~/assets/img/description-2-app.png" class="p-4 lg:px-16" /> -->
            <iframe
              src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FBanderaBlancaApp%2Fvideos%2F789624668241190%2F&show_text=0&width=560"
              width="560"
              height="336"
              style="border:none;overflow:hidden"
              scrolling="no"
              frameborder="0"
              allowtransparency="true"
              allowfullscreen="true"
            ></iframe>
          </div>
        </div>
      </div>
    </section>

    <section class="relative">
      <div class="font-sans container m-auto lg:text-left sm:items-center text-gray-700">
        <div
          class="w-full lg:w-2/3 mx-auto flex flex-col justify-center items-center p-8 items-center lg:items-center text-center"
        >
          <h1 class="my-4 font-bold text-3xl md:text-5xl w-full">{{ $t('home.about') }}</h1>
          <h2 class="text-2xl font-bold w-full">{{ $t('home.about_subtitle') }}</h2>
          <p class="leading-normal mb-4">{{ $t('home.about_description') }}</p>
          <div class="w-full lg:w-3/4 m-auto">
            <img src="~/assets/img/about.svg" />
          </div>
        </div>
      </div>
    </section>
    <section class="bg-indigo-100 py-5 lg:pb-8">
      <div
        class="flex flex-wrap my-8 font-sans relative container m-auto sm:items-center lg:mt-8 mt-0"
      >
        <h1
          class="my-4 font-bold text-3xl md:text-5xl text-gray-700 w-full text-center"
        >Cadena de Solidaridad</h1>
        <div class="m-auto lg:px-8 px-2">
          <div class="flex flex-wrap lg:flex-row md:mb-0">
            <div class="absolute top-0 left-0 opacity-25 pt-2">
              <svg
                width="200"
                height="220"
                viewBox="0 0 512 358"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <defs>
                  <linearGradient
                    x1="50%"
                    y1="1.18771115%"
                    x2="50%"
                    y2="100%"
                    id="linearGradient-1"
                  >
                    <stop stop-color="#9193FE" offset="0%" />
                    <stop stop-color="#FFA2B4" offset="100%" />
                  </linearGradient>
                </defs>
                <g
                  id="Page-1"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                  opacity="0.316848028"
                >
                  <g id="cita-izquierda" fill="url(#linearGradient-1)" fill-rule="nonzero">
                    <path
                      d="M392,358 C325.832,358 272,304.168 272,238 C272,102.852 326.68,13.203 329.007,9.453 L334.874,0 L422.458,0 L415.241,25.455 C408.188,50.335 397,95.288 397,110 C397,113.59 397.107,116.215 397.251,118.118 C427.722,119.429 456.168,132.079 477.626,153.931 C499.792,176.503 512,206.359 512,238 C512,304.168 458.168,358 392,358 Z M357.812,40 C344.836,65.166 312,138.68 312,238 C312,282.112 347.888,318 392,318 C436.112,318 472,282.112 472,238 C472,194.737 436.824,158.858 393.587,158.021 L392.719,158 C375.174,157.904 366.62,148.896 362.531,141.331 C357.94,132.838 357,122.664 357,110 C357,94.041 364.194,62.584 369.941,40 L357.812,40 Z M120,358 C53.832,358 0,304.168 0,238 C0,102.852 54.68,13.203 57.007,9.453 L62.874,0 L150.458,0 L143.241,25.455 C136.188,50.335 125,95.288 125,110 C125,113.59 125.107,116.215 125.251,118.118 C155.722,119.429 184.168,132.079 205.626,153.931 C227.792,176.503 240,206.359 240,238 C240,304.168 186.168,358 120,358 Z M85.812,40 C72.836,65.166 40,138.68 40,238 C40,282.112 75.888,318 120,318 C164.112,318 200,282.112 200,238 C200,194.737 164.824,158.858 121.587,158.021 L120.719,158 C103.174,157.904 94.62,148.896 90.531,141.331 C85.94,132.838 85,122.664 85,110 C85,94.041 92.194,62.584 97.941,40 L85.812,40 Z"
                      id="Shape"
                    />
                  </g>
                </g>
              </svg>
            </div>
            <div class="absolute bottom-0 right-0 opacity-25 lg:-mb-16 lg:-mr-16 mr-0 mb-0">
              <svg
                width="200"
                height="220"
                viewBox="0 0 512 358"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <defs>
                  <linearGradient
                    x1="50%"
                    y1="1.18771115%"
                    x2="50%"
                    y2="100%"
                    id="linearGradient-1"
                  >
                    <stop stop-color="#9193FE" offset="0%" />
                    <stop stop-color="#FFA2B4" offset="100%" />
                  </linearGradient>
                </defs>
                <g
                  id="Page-1"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                  opacity="0.316848028"
                >
                  <g
                    id="cita-izquierda"
                    transform="translate(256.000000, 179.000000) scale(-1, 1) translate(-256.000000, -179.000000) "
                    fill="url(#linearGradient-1)"
                    fill-rule="nonzero"
                  >
                    <path
                      d="M392,358 C325.832,358 272,304.168 272,238 C272,102.852 326.68,13.203 329.007,9.453 L334.874,0 L422.458,0 L415.241,25.455 C408.188,50.335 397,95.288 397,110 C397,113.59 397.107,116.215 397.251,118.118 C427.722,119.429 456.168,132.079 477.626,153.931 C499.792,176.503 512,206.359 512,238 C512,304.168 458.168,358 392,358 Z M357.812,40 C344.836,65.166 312,138.68 312,238 C312,282.112 347.888,318 392,318 C436.112,318 472,282.112 472,238 C472,194.737 436.824,158.858 393.587,158.021 L392.719,158 C375.174,157.904 366.62,148.896 362.531,141.331 C357.94,132.838 357,122.664 357,110 C357,94.041 364.194,62.584 369.941,40 L357.812,40 Z M120,358 C53.832,358 0,304.168 0,238 C0,102.852 54.68,13.203 57.007,9.453 L62.874,0 L150.458,0 L143.241,25.455 C136.188,50.335 125,95.288 125,110 C125,113.59 125.107,116.215 125.251,118.118 C155.722,119.429 184.168,132.079 205.626,153.931 C227.792,176.503 240,206.359 240,238 C240,304.168 186.168,358 120,358 Z M85.812,40 C72.836,65.166 40,138.68 40,238 C40,282.112 75.888,318 120,318 C164.112,318 200,282.112 200,238 C200,194.737 164.824,158.858 121.587,158.021 L120.719,158 C103.174,157.904 94.62,148.896 90.531,141.331 C85.94,132.838 85,122.664 85,110 C85,94.041 92.194,62.584 97.941,40 L85.812,40 Z"
                      id="Shape"
                    />
                  </g>
                </g>
              </svg>
            </div>
            <div class="relative p-4 lg:w-1/2 w-full">
              <div class="shadow-lg items-center bg-white rounded-lg p-8">
                <img src="~/assets/img/pnp.png" class="h-10 rounded-full mb-5" />
                <div>
                  <p
                    class="italic text-sm"
                  >"La Camara de Comercio de Ayacucho, en un esfuerzo conjunto al aplicativo bandera blanca, canalizara la ayuda que fue recolectada y acopiada lo cual se pretende cubrir el 100% de los hogares en condiciones de bandera Blanca."</p>
                  <p
                    class="mt-2 text-xs text-indigo-500 text-right"
                  >- Camara de Comercio de Ayacucho</p>
                </div>
              </div>
            </div>
            <div class="relative p-4 lg:w-1/2 w-full">
              <div class="shadow-lg items-center bg-white rounded-lg p-8">
                <img src="~/assets/img/canal_25.png" class="h-10 rounded-full mb-5" />
                <div>
                  <p
                    class="italic text-sm"
                  >"La Camara de Comercio de Ayacucho, en un esfuerzo conjunto al aplicativo bandera blanca, canalizara la ayuda que fue recolectada y acopiada lo cual se pretende cubrir el 100% de los hogares en condiciones de bandera Blanca."</p>
                  <p
                    class="mt-2 text-xs text-indigo-500 text-right"
                  >- Camara de Comercio de Ayacucho</p>
                </div>
              </div>
            </div>
            <div class="relative p-4 lg:w-1/2 w-full">
              <div class="shadow-lg items-center bg-white rounded-lg p-8">
                <img src="~/assets/img/camara_comercio.jpeg" class="h-10 rounded-full mb-5" />
                <div>
                  <p
                    class="italic text-sm"
                  >"La Camara de Comercio de Ayacucho, en un esfuerzo conjunto al aplicativo bandera blanca, canalizara la ayuda que fue recolectada y acopiada lo cual se pretende cubrir el 100% de los hogares en condiciones de bandera Blanca."</p>
                  <p
                    class="mt-2 text-xs text-indigo-500 text-right"
                  >- Camara de Comercio de Ayacucho</p>
                </div>
              </div>
            </div>
            <div class="relative p-4 lg:w-1/2 w-full">
              <div class="shadow-lg items-center bg-white rounded-lg p-8">
                <img src="~/assets/img/ayacucho-ccb.jpeg" class="h-10 rounded-full mb-5" />
                <div>
                  <p
                    class="italic text-sm"
                  >"La Camara de Comercio de Ayacucho, en un esfuerzo conjunto al aplicativo bandera blanca, canalizara la ayuda que fue recolectada y acopiada lo cual se pretende cubrir el 100% de los hogares en condiciones de bandera Blanca."</p>
                  <p
                    class="mt-2 text-xs text-indigo-500 text-right"
                  >- Camara de Comercio de Ayacucho</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      class="my-8 font-sans relative container m-auto lg:text-left sm:items-center min-h-screen bg-transparent lg:mt-8 mt-0"
    >
      <div
        class="w-full lg:w-2/3 mx-auto flex flex-col justify-center items-center p-8 items-center lg:items-start text-center"
      >
        <h1
          class="my-4 font-bold text-3xl md:text-5xl text-gray-700 w-full"
        >{{ $t('home.motivation') }}</h1>
        <p class="leading-normal mb-4 text-gray-700">{{ $t('home.motivation_description') }}</p>
      </div>
      <div class="w-full mx-auto">
        <img src="~/assets/img/description-1-app.png" class="p-8 hidden lg:block" />
        <img src="~/assets/img/description-1-mobile.png" class="p-8 block lg:hidden" />
      </div>
    </section>
    <!-- <Banner /> -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState, mapGetters } from 'vuex'
import Banner from '~/components/Banner.vue'
import FlagCard from '~/components/FlagCard.vue'

export default Vue.extend({
  components: {
    Banner,
    FlagCard,
  },
  head() {
    return {
      meta: [{ property: 'og:image', content: '/header-iphone.png' }],
    }
  },
  computed: {
    ...mapState({
      flags: (state: any) => state.flags,
    }),
    ...mapGetters({
      isLoggedIn: 'isLoggedIn',
    }),
  },
  created() {
    this.$store.dispatch('loadFlags')
  },
})
</script>

<style >
/* .bg_map {
  background-image: url('~/assets/img/map.svg');
  background-attachment: fixed;
  background-size: cover;
} */
</style>
