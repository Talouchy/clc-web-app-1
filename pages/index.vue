<template>
  <v-container>
    <v-layout
      text-xs-center
      wrap>
      <v-flex
        mb-4>
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome to CLC App
        </h1>
        <p class="subheading font-weight-regular">
          This project is done by KnD
        </p>
      </v-flex>

      <v-flex
        mb-5
        xs12>
        <h2
          class="headline font-weight-bold mb-3">
          <nuxt-link
            to="/dashboard"
            class="subheading mx-3">
            Dashboard page
          </nuxt-link>
        </h2>
        <h2
          class="headline font-weight-bold mb-3">
          <nuxt-link
            to="/settings"
            class="subheading mx-3">
            Settings page
          </nuxt-link>
        </h2>
        <h2
          class="headline font-weight-bold mb-3">
          <nuxt-link
            to="/feedback"
            class="subheading mx-3">
            Feedback page
          </nuxt-link>
        </h2>
        <h2
          class="headline font-weight-bold mb-3">
          <nuxt-link
            to="/events"
            class="subheading mx-3">
            Events page
          </nuxt-link>
        </h2>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({}),
  created: function() {
    this.$nuxt.$emit('updatePageTitle', 'Welcome')
  }
}
</script>
