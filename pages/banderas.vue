<template>
  <div>
    <div class="container mx-auto items-stretch">
      <div class="lg:flex flex-wrap items-stretch">
        <div class="lg:w-1/4 p-4" v-for="flag in flags" :key="flag.id">
          <FlagCard :flag="flag" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState, mapGetters } from 'vuex'
import FlagCard from '~/components/FlagCard.vue'

export default Vue.extend({
  components: {
    FlagCard,
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
})
</script>