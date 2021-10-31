<template>
  <section class="relative">
    <div
      class="font-sans container m-auto lg:text-left sm:items-center text-gray-700"
    >
      <div
        class="w-full lg:w-2/3 mx-auto flex flex-col justify-center items-center p-8 items-center lg:items-center text-center"
      >
        <h1 class="my-4 font-bold text-3xl md:text-5xl w-full">
          {{ $t('home.about') }}
        </h1>
        <h2 class="text-2xl font-bold w-full">
          {{ $t('home.about_subtitle') }}
        </h2>
        <p class="leading-normal mb-4">{{ $t('home.about_description') }}</p>
        <div class="w-full lg:w-3/4 m-auto">
          <img src="~/assets/img/about.svg" />
        </div>
      </div>
    </div>
  </section>
</template>
