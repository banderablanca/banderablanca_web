<template>
  <div>
    <iframe
      class="w-5/6 mx-auto h-full"
      src="https://datastudio.google.com/embed/reporting/5f5e1e31-3f5e-4e40-9803-b79213374ecd/page/lPOOB"
      frameborder="0"
      style="border:0;overflow-y:hidden !important"
      allowfullscreen
      scrolling="no"
    ></iframe>
    <iframe
      class="w-5/6 mx-auto h-full"
      src="https://datastudio.google.com/embed/reporting/a7f73e40-8e1f-4edc-83c5-191605473e0f/page/lPOOB"
      frameborder="0"
      scrolling="no"
      
      style="border:0;overflow-y:hidden !important"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  head() {
    return {
      meta: [{ property: 'og:image', content: '/header-iphone.png' }]
    }
  }
})
</script>