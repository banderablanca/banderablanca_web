<template>
  <div class="h-screen bg-right bg-cover bg_background">
    <!--Nav-->
    <Nav />
    <div
      class="bg-white border rounded-lg overflow-hidden"
      v-for="flag in flags"
      :key="flag.id"
    >
      <div class="relative pb-2/3">
        <img
          class="h-24 w-full object-cover"
          :src="flag.media_content.download_url"
          :alt="flag.address"
        />
      </div>
      <div class="p-6">
        <div class="flex items-baseline">
          <div
            class="ml-2 text-gray-600 text-xs uppercase font-semibold tracking-wide"
          >{{ flag.address }} &bull; {{ formattedDate(flag.timestamp) }}</div>
        </div>
        <h4 class="mt-1 font-semibold text-lg leading-tight truncate">{{ flag.description }}</h4>

        <div class="mt-2 flex items-center">
          <a
            class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
            v-bind:href="'https://www.google.com/maps/search/?api=1&query=' + flag.position.Pc +',' +flag.position.Vc"
            target="_blank"
          >
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
              <path
                d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
              />
              <path d="M0 0h24v24H0z" fill="none" />
            </svg>
            <span>Ver ubicación</span>
          </a>
        </div>
      </div>
    </div>
    <!--Footer-->
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState, mapGetters } from 'vuex'
import moment from 'moment'
import Nav from '~/components/Nav.vue'
import Footer from '~/components/Footer.vue'
export default Vue.extend({
  components: {
    Nav,
    Footer,
  },
  computed: {
    ...mapState({
      authUser: (state: any) => state.authUser,
      flags: (state: any) => state.flags,
    }),
    ...mapGetters({
      isLoggedIn: 'isLoggedIn',
    }),
  },
  created() {
    this.$store.dispatch('loadFlags')
  },
  methods: {
    formattedDate(givenDate: any) {
      return moment(givenDate).fromNow()
    },
  },
})
</script>