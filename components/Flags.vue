<template>
  <div class="lg:flex">
    <div class="w-full lg:w-1/4 p-2" v-for="flag in flags.slice(0, 4)" :key="flag.id">
      <div class="bg-white rounded-lg shadow-xs overflow-hidden hover:shadow-xl hover:border-none">
        <div class="relative pb-2/3">
          <img
            class="h-24 lg:h-48 w-full object-cover"
            :src="flag.media_content.download_url"
            :alt="flag.address"
          />
        </div>
        <div class="p-6 px-4">
          <div class="flex items-baseline">
            <div
              class="text-gray-600 text-xs uppercase font-semibold tracking-wide truncate"
            >{{ flag.address }} &bull; {{ formattedDate(flag.timestamp) }}</div>
          </div>
          <h4 class="mt-1 font-semibold text-lg leading-tight truncate">{{ flag.description }}</h4>

          <div class="mt-4 flex items-center">
            <a
              class="bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
              v-bind:href="'https://www.google.com/maps/search/?api=1&query=' + flag.position.Pc +',' +flag.position.Vc"
              target="_blank"
            >
              <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24" width="20">
                <path
                  fill="#FF5D71"
                  d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                />
                <path d="M0 0h24v24H0z" fill="none" />
              </svg>
              <span class="text-gray-600">Ver ubicación</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState, mapGetters } from 'vuex'
import moment from 'moment'
export default Vue.extend({
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
  methods: {
    formattedDate(givenDate: any) {
      return moment(givenDate).fromNow()
    },
  },
})
</script>