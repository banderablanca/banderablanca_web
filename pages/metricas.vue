<template>
  <div class="h-screen bg-right bg-cover bg_background">
    <!--Nav-->
    <Nav />
    <iframe
      class="w-5/6 mx-auto"
      
      src="https://datastudio.google.com/embed/reporting/5f5e1e31-3f5e-4e40-9803-b79213374ecd/page/lPOOB"
      frameborder="0"
      style="border:0;height:100vh;overflow-y:hidden !important"
      allowfullscreen
    ></iframe>
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
  },
  head() {
    return {
      meta: [{ property: 'og:image', content: '/header-iphone.png' }]
    }
  }
})
</script>