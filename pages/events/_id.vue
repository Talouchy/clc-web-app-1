<template>
  <v-layout
    row
    wrap>
    <v-flex
      xs12
      sm6
      offset-sm3>
      <v-layout
        row
        wrap
        class="rust_app_color lighten-1"
        pa-2>
        <!-- Event Image -->
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
          aspect-ratio="2.75"
          height="350px"
          width="150px" />
      </v-layout>
    </v-flex>
    <v-flex>
      <v-layout
        pa-3
        align-center
        row
        wrap>
        <v-layout
          row
          wrap>
          <v-flex text-xs-center>
            <v-card
              class="rounded-corner"
              elevation-10>
              <v-layout
                row
                wrap
                fluid
                align-center="true">
                <!-- Event details block-->
                <v-card-title primary-title>
                  <div>
                    <div class="headline">Event Details</div>
                    <v-card-text v-text="d" />
                  </div>
                </v-card-title>
              </v-layout>
            </v-card>
          </v-flex>
        </v-layout>
        <!-- Add to calander button-->
        <v-layout
          align-center
          justify-center
          fill-height>
          <v-flex
            xs6
            sm3
            md2>
            <div class="float-center-button text-xs-center">
              <v-btn
                round
                color="primary"
                dark
                ma-auto>
                Add to Calendar
              </v-btn>
            </div>
          </v-flex>
        </v-layout>
        <!--v-flex class="float-center-button">
          <v-btn
            color="grey"
            round
            to="/Event_Details">
            Add to Calander
          </v-btn>
        </v-flex -->
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'EventDetails',
  data() {
    return {
      tile: false,
      t: true,
      d:
        'Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat. Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat. Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.'
    }
  }
}
</script>
