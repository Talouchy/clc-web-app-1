<template>
  <v-layout
    ma-0
    row
    wrap
    class="ice_app_color">
    <v-layout 
      row 
      ma-3
      wrap>
      <v-flex xs12>
        <v-card 
          color="white" 
          class="rounded-corner">
          <v-card-title 
            xs6
            sm6
            pa-6
            primary-title/>
          <v-img
            src="https://library.ucr.edu/sites/default/files/OrbachGroundFloor.jpg"
            alt="Floor-map"
            max-height="350"
            contain/>
        </v-card>
      </v-flex>
    </v-layout>
    <v-flex 
      xs12
      ma-3>
      <v-card 
        color="white" 
        class="rounded-corner"
        elevation-10>
        <!-- Drop down menu -->
        <v-card-text
          pa-3
          mt-3
          class="title font-weight-regular text-lg-center">Levels</v-card-text>
        <v-overflow-btn
          :items="levels"
          label="Choose level.."
          color="cyan darken-4" 
          target="#dropdown-example"/>
        <v-divider light/>
        <v-spacer/>
        <v-card-text 
          fiber_manual_record
          color="success"> 1.06</v-card-text>
      </v-card>
    </v-flex>  
  </v-layout>  
</template>
<script>
export default {
  data: () => ({
    levels: ['Level 1', 'Level 2', 'Level 3', 'Level 4', 'Level 5', 'Level 6']
  }),
  created: function() {
    this.$nuxt.$emit('updatePageTitle', 'Floor Map')
  }
}
</script>
