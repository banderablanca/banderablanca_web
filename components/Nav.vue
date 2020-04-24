<template>
  <div class="w-full container mx-auto p-6">
    <div class="w-full flex items-center justify-between">
      <a
        class="flex items-center text-black no-underline hover:no-underline font-bold text-2xl lg:text-2xl"
        href="#"
      >
        <img src="~/assets/img/logo.png" alt="" class="w-8 pr-2" />
        <span>{{ $t('app_name') }}</span>
      </a>

      <div class="flex w-1/2 justify-end content-center">
        <span v-if="$i18n.locale === 'es'" class="px-3">
          <NuxtLink :to="`/quechua` + $route.fullPath" exact>
            {{ $t('langs.quechua') }}
          </NuxtLink>
        </span>
        <span v-else>
          <NuxtLink :to="$route.fullPath.replace(/^\/[^\/]+/, '')" class="Header__Link" active-class="none" exact>
            {{ $t('langs.spanish') }}
          </NuxtLink>
        </span>
        <!--
        <a
          class="inline-block text-blue-300 no-underline hover:text-indigo-800 hover:text-underline text-center h-10 md:h-auto "
          href="#"
        >
          <button
            class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold rounded-full hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          >
            Descargar
          </button>
        </a>
        -->
      </div>
    </div>
  </div>
</template>
