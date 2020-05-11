<template>
  <div
    class="bg-white rounded-lg shadow-xs hover:shadow-xl hover:border-none border rounded-lg overflow-hidden h-full flex flex-col"
  >
    <div class="relative pb-2/3">
      <img
        class="h-24 lg:h-56 w-full object-cover"
        :src="flag.media_content.download_url"
        :alt="flag.address"
      />
    </div>
    <div class="p-4 h-full">
      <div class="h-full flex content-between flex-wrap">
        <div class="w-full">
          <div
            class="text-gray-600 text-xs uppercase whitespace-normal"
          >{{ flag.address }} &bull; {{ formattedDate(flag.timestamp) }}</div>
          <h4 class="mt-4 mb-2 text-lg leading-tight truncate">{{ flag.description }}</h4>
        </div>

        <div class="mt-2 flex items-center">
          <a
            class="bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
            v-bind:href="'https://www.google.com/maps/search/?api=1&query=' + flag.position.Pc +',' +flag.position.Vc"
            target="_blank"
          >
            <font-awesome-icon :icon="['fas', 'map-marker-alt']" :style="{ color: 'red' }" />&nbsp;
            <span class="text-gray-600">Ver ubicación</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import moment from 'moment'
export default Vue.extend({
  props: {
    flag: {
      type: Object,
    },
  },
  methods: {
    formattedDate(givenDate: any) {
      return moment(givenDate).fromNow()
    },
  },
})
</script>