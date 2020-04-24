<template>
  <div class="h-screen bg-right bg-cover bg_background">
    <!--Nav-->
    <Nav />
    <!--Main-->
    <div
      class="container  px-6 mx-auto flex flex-wrap flex-col
				md:flex-row items-center min-h-screen"
    >
      <!--Left Col-->
      <div
        class="flex flex-col w-full xl:w-2/5 justify-center lg:items-start
					overflow-y-hidden "
      >
        <h1
          class="my-4 text-3xl md:text-5xl text-gray-800 font-bold
						leading-tight text-center md:text-left slide-in-bottom-h1"
        >
          {{ $t('slogan') }}
        </h1>
        <p
          class="leading-normal text-base md:text-xl mb-2 text-center
						md:text-left slide-in-bottom-subtitle"
        >
          {{ $t('home.description_line1') }}
        </p>
        <p class="leading-normal text-base md:text-xl mb-2 text-center
						md:text-left slide-in-bottom-subtitle">
          {{ $t('home.description_line2') }}
        </p>
        <p  class="leading-normal text-base md:text-xl mb-2 text-center
						md:text-left slide-in-bottom-subtitle">
          {{ $t('home.description_line3') }}
        </p>

        <p
          class="text-red-400 font-bold pb-2 lg:pb-6 text-center md:text-left
						fade-in"
        >
          {{ $t('home.download') }} {{ $t('app_name') }}
        </p>
        <div
          class="flex w-full justify-center md:justify-start pb-24 lg:pb-0
						fade-in"
        >
          <a
            href="https://play.google.com/store/apps/details?id=org.banderablanca"
            target="_blank"
          >
            <img
              src="~/assets/img/Play Store.svg"
              class="h-12 bounce-top-icons"
            />
          </a>
          <div
            class=" flex-wrap items-center  text-center justify-center lg:px-8 pl-4"
          >
            <img
              src="~/assets/img/App Store.svg"
              class="h-12 pr-4 bounce-top-icons"
            />
            <span class="font-bold pr-2 text-gray-500 text-xs">Muy pronto</span>
          </div>
        </div>
      </div>

      <!--Right Col-->
      <div class="w-full xl:w-3/5 py-6 overflow-y-hidden">
        <img
          class="w-5/6 mx-auto lg:mr-0 slide-in-bottom"
          src="~/assets/img/header-iphone.png"
        />
      </div>
    </div>
    <section class="bg-gray-200">
      <div
        class="w-full lg:w-1/2 mx-auto flex flex-col justify-center items-start p-8 items-center lg:items-start text-center"
      >
        <h1 class="my-4 font-bold text-3xl md:text-5xl text-gray-700 w-full">
          {{ $t('home.how_work') }}
        </h1>
        <p class="leading-normal mb-4 text-gray-700">
          {{ $t('home.how_work_description') }}
        </p>
      </div>
      <div
        class="font-sans container  m-auto flex flex-col lg:flex-row justify-center my-8"
      >
        <div
          class="order-2 lg:order-1 p-4  w-full lg:w-1/4 flex flex-col items-center lg:items-end justify-center text-center lg:text-right ml-0 lg:ml-8 mt-8"
        >
          <div
            class="w-16 h-16 rounded-full border border-red-400 mb-2 flex items-center justify-center"
          >
            <img src="~/assets/img/logo.svg" alt="" class="w-full p-5" />
          </div>
          <h2 class="text-black mb-2 font-bold">{{ $t('home.find_flag') }}</h2>
          <p class="text-gray-700 leading-normal mb-8">
            {{ $t('home.find_flag_description') }}
          </p>
          <div class="w-16 h-16 rounded-full border border-red-400 mb-2">
            <img
              src="~/assets/img/people-arrows-solid.svg"
              alt=""
              class="w-full p-5"
            />
          </div>
          <h2 class="text-black mb-2 font-bold">
            {{ $t('home.community') }}
          </h2>
          <p class="text-gray-700 leading-normal mb-8">
            {{ $t('home.community_description') }}
          </p>
        </div>
        <div
          class="order-1 lg:order-2 w-full lg:w-1/2 max-w-sm m-auto mb-6 lg:mb-0"
        >
          <img src="~/assets/img/features-app.jpg" alt="" class="px-8" />
        </div>
        <div
          class="order-last w-full p-4  lg:w-1/4 flex flex-col items-center lg:items-start justify-center text-center lg:text-left mt-8 mr-8"
        >
          <div class="w-16 h-16 rounded-full border border-red-400 mb-2">
            <img
              src="~/assets/img/comments-regular.svg"
              alt=""
              class="w-full p-5"
            />
          </div>
          <h2 class="text-black mb-2 font-bold">
            {{ $t('home.comment_flag') }}
          </h2>
          <p class="text-gray-700 leading-normal mb-8">
            {{ $t('home.comment_flag_description') }}
          </p>
          <div class="w-16 h-16 rounded-full border border-red-400 mb-2">
            <img
              src="~/assets/img/flag-regular.svg"
              alt=""
              class="w-full p-5"
            />
          </div>
          <h2 class="text-black mb-2 font-bold">
            {{ $t('home.raise_flag') }}
          </h2>
          <p class="text-gray-700 leading-normal">
            {{ $t('home.raise_flag_description') }}
          </p>
        </div>
      </div>
    </section>
    <section>
      <div
        class="my-8 pt-8 font-sans container m-auto flex flex-col-reverse lg:flex-row text-center lg:text-left sm:items-center text-gray-700 min-h-screen"
      >
        <div
          class="w-full lg:w-1/2 flex flex-col justify-center items-start p-8 items-center lg:items-start"
        >
          <h1 class="my-4 font-bold text-3xl md:text-5xl  w-full">
            {{ $t('home.register_flag') }}
          </h1>
          <p class="leading-normal mb-4">
            {{ $t('home.register_flag_description') }}
          </p>
          <ul class="list-inside ">
            <li class="py-2 flex">
              - {{ $t('home.register_flag_step1') }}
            </li>
            <li class="py-2 flex">
              - {{ $t('home.register_flag_step2') }}
            </li>
            <li class="py-2 flex">
              - {{ $t('home.register_flag_step3') }}
            </li>
          </ul>
        </div>
        <div class="w-full lg:w-1/2">
          <img
            src="~/assets/img/description-2-app.png"
            alt=""
            class="p-4 lg:px-16"
          />
        </div>
      </div>
    </section>

    <section class="bg-gray-200">
      <div
        class="font-sans container m-auto lg:text-left sm:items-center  text-gray-700"
      >
        <div
          class="w-full lg:w-2/3 mx-auto flex flex-col justify-center items-center p-8 items-center lg:items-center text-center min-h-screen "
        >
          <h1 class="my-4 font-bold text-3xl md:text-5xl w-full">
            {{ $t('home.about') }}
          </h1>
          <h2 class="text-2xl font-bold w-full">
            {{ $t('home.about_subtitle') }}
          </h2>
          <p class="leading-normal mb-4">
            {{ $t('home.about_description') }}
          </p>
        </div>
      </div>
    </section>
        <section
      class="my-8 font-sans container m-auto lg:text-left sm:items-center min-h-screen bg-transparent"
    >
      <div
        class="w-full lg:w-2/3 mx-auto flex flex-col justify-center items-start p-8 items-center lg:items-start text-center"
      >
        <h1 class="my-4 font-bold text-3xl md:text-5xl text-gray-700 w-full">
          {{ $t('home.motivation') }}
        </h1>
        <p class="leading-normal mb-4 text-gray-700">
          {{ $t('home.motivation_description') }}
        </p>
      </div>
      <div class="w-full mx-auto">
        <img
          src="~/assets/img/description-1-app.png"
          alt=""
          class="p-8 hidden lg:block"
        />
        <img
          src="~/assets/img/description-1-mobile.png"
          alt=""
          class="p-8 block lg:hidden"
        />
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

export default Vue.extend({
  components: {
    Nav,
    Footer
  }
})
</script>

<style>
.bg_background {
  background-image: url('~assets/img/bg.svg');
  background-attachment: fixed;
}
</style>
