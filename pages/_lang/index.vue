<template>
  <div class="bg-right bg-cover">
    <!--Nav-->
    <Nav />
    <div>
      <div class="overflow-hidden w-full absolute top-0 left-0 z-0">
        <!-- waves -->
        <div class="bg-indigo-400 h-32 -mx-10"></div>
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
        <Flag />
        <div class="text-center py-6 lg:py-12">
          <nuxt-link
            to="/banderas"
            class="bg-white hover:bg-gray-100 text-gray-800 font-semibold p-4 rounded shadow-xl"
          >Ver toda las banderas</nuxt-link>
        </div>
        <!-- <iframe
          class="w-5/6 mx-auto slide-in-bottom"
          height="336"
          width="560"
          src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FBanderaBlancaApp%2Fvideos%2F321707522134019%2F&show_text=0&width=560"
          style="border:none;overflow:hidden"
          scrolling="no"
          frameborder="0"
          allowtransparency="true"
          allowfullscreen="true"
          data-width="auto"
        ></iframe>-->
      </div>
    </div>
    <section class="relative">
      <div
        class="w-full lg:w-1/2 mx-auto flex flex-col justify-center items-start p-8 items-center lg:items-start text-center lg:pb-8 pb-0"
      >
        <h1 class="my-4 font-bold text-3xl md:text-5xl w-full">{{ $t('home.how_work') }}</h1>
        <p class="leading-normal mb-4 text-gray-700">{{ $t('home.how_work_description') }}</p>
      </div>
      <div
        class="font-sans container m-auto flex flex-col lg:flex-row justify-center py-8 pt-0 lg:pb-0"
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

    <section class="relative">
      <svg
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
      </svg>
      <div class="bg-indigo-100">
        <div
          class="pb-8 font-sans container m-auto flex flex-col-reverse lg:flex-row text-center lg:text-left sm:items-center text-gray-700"
        >
          <div
            class="w-full lg:w-1/2 flex flex-col justify-center items-start p-8 items-center lg:items-start"
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
            <img src="~/assets/img/description-2-app.png" class="p-4 lg:px-16" />
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
    <!--Footer-->
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Nav from '~/components/Nav.vue'
import Footer from '~/components/Footer.vue'
import Flag from '~/components/Flags.vue'

export default Vue.extend({
  components: {
    Nav,
    Footer,
    Flag,
  },
  head() {
    return {
      meta: [{ property: 'og:image', content: '/header-iphone.png' }],
    }
  },
})
</script>

<style>
.bg_background {
  background-image: url('~assets/img/bg.svg');
  background-attachment: fixed;
}
</style>
