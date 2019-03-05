<template>
  <div>
    <h1>Admin Page</h1>
    <!-- TODO: FIX THIS PAGE -->
    <v-btn @click="logout()">Logout</v-btn>
  </div>
</template>

<script>
export default {
  name: 'AdminHome',
  middleware: 'auth',
  created: function() {
    this.$nuxt.$emit('updatePageTitle', 'Admin')
  },
  methods: {
    async logout() {
      try {
        await this.$store
          .dispatch('logout')
          .then(() => this.$router.push({ path: '/admin/login' }))
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>
