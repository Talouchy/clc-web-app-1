<template>
  <v-container grid-list-md>
    <v-layout
      row
      wrap>
      <v-flex xs12>
        <v-card>
          <v-card-title
            v-if="error.statusCode"
            class="error darken-3 white--text subheading"
            primary-title>
            <span class="title">Oops! => Error code: {{ error.statusCode }}</span>
          </v-card-title>
          <v-card-text v-if="error.message">
            {{ error.message }}
          </v-card-text>
          <v-card-text v-else>
            Looks like you're in uncharted territory. We don't know about this page yet.
            Luckily, we know the way back.
          </v-card-text>
          <v-card-actions>
            <v-btn
              flat
              class="error darken-3 white--text"
              to="/">Home</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: null
    }
  }
}
</script>
