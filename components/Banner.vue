<template>
  <div v-if="showBanner" class="shadow-xxl p-4 fixed bottom-0 w-full bg-white">
    <div class="relative container flex flex-col sm:flex-row m-auto shadow mx-auto">
      <button
        class="absolute top-0 right-0 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        v-on:click="hideBanner"
      >
        <font-awesome-icon :icon="['fa', 'times']" />
      </button>
      <img src="~/assets/img/solidaridad.png" class="h-32 hidden lg:block" />
      <div class="w-full sm:w-3/4 lg:px-6 px-2 pt-2 lg:pt-6 text-left flex flex-col justify-center">
        <h2 class="text-lg capitalize font-bold">Campaña de solidaridad frente al Covid 19</h2>
        <p
          class="text-gray-700 mt-2 mb-2"
        >Amigo empresario y personas de buenna voluntad los invitamos a seguir apoyando a los hogares que menos tienen con víveres y alimentos no perecibles.</p>

        <p class="text-gray-700 font-bold">Hora: 09:00 am - 01:00 pm</p>
        <p class="text-gray-700 mb-2 font-bold">
          <a
            class="hover:text-blue-900 text-blue font-bold rounded inline-flex items-center"
            href="https://goo.gl/maps/tF8VBjKYqtBwe4jt6"
            target="_blank"
          >Lugar de acopio: Cámara de comercio Jr. San Martin 532, Ayacucho, Perú</a>
        </p>

        <div class="px-0 py-1">
          <a
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
            href="tel:966650840"
          >
            <font-awesome-icon :icon="['fa', 'phone']" />&nbsp; 966 650 840
          </a>
          <a
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
            href="tel:066312998"
          >
            <font-awesome-icon :icon="['fa', 'phone']" />&nbsp; (066) 312 998
          </a>
          
        </div>
         <div
        class="w-full sm:w-full flex flex-wrap justify-start sm:justify-center items-center lg:pl-6 pb-6 sm:pl-0 sm:pb-0"
      >
        <img src="~/assets/img/camara_comercio.jpeg" class="h-8 m-1" />
        <img src="~/assets/img/canal_25.png" class="h-8 m-1" />
        <img src="~/assets/img/ayacucho-ccb.jpeg" class="h-8 m-1" />
      </div>
      </div>
     
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState, mapGetters } from 'vuex'
export default Vue.extend({
  computed: {
    ...mapState({
      showBanner: (state: any) => state.showBanner,
    }),
  },
  methods: {
    hideBanner() {
      this.$store.dispatch('hideBanner')
    },
  },
})
</script>