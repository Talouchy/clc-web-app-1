<template>
  <v-app class="ice_app_color">
    <!-- Toolbar -->
    <Toolbar :page-title="currentPageTitle"/>

    <v-content class="pt-0">
      <nuxt />
    </v-content>

    <!-- Footer -->
    <v-container>
      <Footer />
    </v-container>
  </v-app>
</template>

<script>
import Toolbar from '~/components/toolbar/toolbar'
import Footer from '~/components/footer/footer'
export default {
  name: 'App',
  components: {
    Toolbar,
    Footer
  },
  data() {
    return {
      currentPageTitle: 'CLC App'
    }
  },
  created() {
    this.$nuxt.$on('updatePageTitle', data => {
      this.currentPageTitle = data
    })
  },
  methods: {}
}
</script>
