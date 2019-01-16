<template>
  <v-layout
    row
    wrap>
    <v-container>
      <v-layout
        row
        wrap>
        <v-flex
          md12
          xs12
          sm12>
          <v-layout
            align-content-center
            row
            wrap
            class="rust_app_color"
            pa-2
          >
            <!-- flex layout for feedback title -->
            <v-flex>
              <v-card
                flat
                class="rust_app_color">
                <v-card-text
                  class=" text-md-center text-sm-center headline white--text font-weight-medium">
                  Please send us your feedback
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
          <!-- layout for feedback textarea -->
        </v-flex>
        <v-flex
          md6
          offset-md3
          sm10
          offset-sm1
          xs10
          offset-xs1
          text-xs-center
          pb-0
          pt-0
          mt-5>
          <v-textarea
            outline
            label="Feedback"
            value=""
            placeholder="Write your feedback here..."
            color="purple darken-2"
            height="300px" />
        </v-flex>
      </v-layout>
      <v-layout
        align-end
        justify-end
        fill-height>
        <v-flex
          xs6
          sm3
          md2>
          <v-btn
            round
            color="primary"
            dark
            class="right">
            Send Feedback
          </v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </v-layout>
</template>

<script>
export default {
  name: 'Feedback',
  data: () => ({}),
  created: function() {
    this.$nuxt.$emit('updatePageTitle', 'Feedback')
  }
}
</script>
