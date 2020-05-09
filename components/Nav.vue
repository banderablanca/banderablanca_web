<template>
  <div class="w-full container mx-auto p-2 px-6 relative z-10">
    <div class="w-full flex items-center justify-between">
      <nuxt-link
        class="flex items-center text-white no-underline hover:no-underline font-bold text-lg lg:text-xl"
        to="/"
      >
        <img src="~/assets/img/logo.png" alt class="w-8 pr-2" />
        <span class="lg:block hidden">{{ $t('app_name') }}</span>
      </nuxt-link>

      <div class="flex w-1/2 justify-end content-center">
        <NuxtLink
          to="/metricas"
          class="inline-block text-white no-underline hover:text-indigo-800 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4"
          exact
        >{{ $t('menu_metrics') }}</NuxtLink>
        <span
          v-if="$i18n.locale === 'es'"
          class="px-3 flex inline-block text-white no-underline hover:text-indigo-800 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4"
        >
          <svg
            class="fill-current h-6 pr-1"
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
            width="24"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"
            />
          </svg>
          <NuxtLink :to="`/quechua` + $route.fullPath" exact>{{ $t('langs.spanish') }}</NuxtLink>
        </span>
        <span
          v-else
          class="px-3 flex inline-block text-white no-underline hover:text-indigo-800 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4"
        >
          <svg
            class="fill-current h-6 pr-1"
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
            width="24"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"
            />
          </svg>
          <NuxtLink
            :to="$route.fullPath.replace(/^\/[^\/]+/, '')"
            class="Header__Link"
            active-class="none"
            exact
          >{{ $t('langs.quechua') }}</NuxtLink>
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
