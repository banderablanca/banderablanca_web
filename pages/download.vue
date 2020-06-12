<template>
  <nuxt-link to="/">Ir al inicio</nuxt-link>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  created() {
    //iPhone Version:
    if (
      navigator.userAgent.match(/iPhone/i) ||
      navigator.userAgent.match(/iPod/i)
    ) {
      window.location.href = 'https://apps.apple.com/us/app/bandera-blanca/id1507865656?l=es&ls=1'
    }
    //Android Version:
    if (navigator.userAgent.match(/android/i)) {
      window.location.href = 'https://play.google.com/store/apps/details?id=org.banderablanca'
    }
    //Blackberry Version:
    if (navigator.userAgent.match(/blackberry/i)) {
      window.location.href = '/'
    }
  },
})
</script>