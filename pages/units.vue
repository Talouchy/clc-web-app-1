<template>
  <v-layout>
    <v-flex
      xs12
      lg10
      offset-lg1
      text-xs-center
      pa-1>
      
      <v-expansion-panel  
        popout
        pb-3
      >
        <v-expansion-panel-content
          v-for="unit in units"
          :key="unit.id"
          class="rounded-corner mb-3">
          <div slot="header">
            <span
              class="body-2">{{ unit.code }}</span>
            <span
              class="caption">{{ unit.name }}</span>
          </div>

          <!-- Card for Lecture Section -->

          <v-card
            class="grey lighten-3"
          >
            <div
              v-for="classe in unit.classes"
              :key="classe.id">
              <v-card-title
                v-if="classe.type === 'lecture'"
                class="subheading grey lighten-2 pa-2 font-weight-medium mb-1">
                Lecture
              </v-card-title>

              <!-- Radio Group for Lectures -->

              <v-radio-group
                v-for="classe in unit.classes"
                :key="classe.id"
                class="pa-0 pl-1 ma-0"
                row>

                <!-- Layout contaning lectures  -->

                <v-layout
                  row
                  wrap>

                  <!-- Flex for radio button (Lecture section) -->

                  <v-flex 
                    xs1
                    style="margin: auto">
                    <v-radio 
                      :value= "classe.id"
                      class="pa-0"
                      color="primary"/>
                  </v-flex>

                  <!-- Flex for day, time and location (Lecture section) -->

                  <v-flex 
                    xs6>
                    <v-card-actions
                      class="pa-0 ma-0">
                      <v-card-text
                        class="pa-0">
                        <div
                          class="pa-1">
                          <v-icon 
                            color="deep-purple darken-2">date_range</v-icon>
                          <span class="body-1 font-weight-medium">{{ classe.day }}</span>
                        </div>
                        <div
                          class="pa-1">
                          <v-icon
                            color="teal darken-2">schedule</v-icon>
                          <span class="body-1 font-weight-medium">{{ classe.time }}</span>
                        </div>
                        <div
                          class="pa-1">
                          <v-icon
                            color="red darken-2">room</v-icon>
                          <span class="body-1 font-weight-medium">{{ classe.location }}</span>
                        </div>
                      </v-card-text>
                    </v-card-actions>
                  </v-flex>

                  <!-- Flex for staff, start date and end date (Lecture section) -->

                  <v-flex xs5>
                    <v-card-actions 
                      class="pa-0">
                      <v-card-text
                        class="pa-0">
                        <div
                          class="pa-1">
                          <v-icon
                            color="orange darken-2">today</v-icon>
                          <span class="body-1 font-weight-medium">{{ classe.startdate }}</span>
                        </div>
                        <div
                          class="pa-1">
                          <v-icon
                            color="brown darken-2">event</v-icon>
                          <span class="body-1 font-weight-medium">{{ classe.enddate }}</span>
                        </div>
                      </v-card-text>
                    </v-card-actions>
                  </v-flex>
                  <v-flex xs1/>
                  <v-flex xs11>
                    <div
                      class="pa-1">
                      <v-icon
                        color="blue darken-2">people</v-icon>
                      <span class="body-1 font-weight-medium">{{ classe.staff }}</span>
                    </div>
                  </v-flex>

                </v-layout>
                <!-- Divider flex (Lecture section) -->
                
              </v-radio-group>
            </div>
            
          </v-card>

          <!-- Divider seperating Lectures and Tutorials -->

          <v-divider
            style="border-top: 2px solid black;"/>
          
          <!-- Card for Tutorial Section -->

          <v-card
            class="grey lighten-3">
            <v-card-title
              class="subheading grey lighten-2 pa-2 font-weight-medium">
              Tutorials
            </v-card-title>
            
            <!-- Radio group for tutorials -->

            <v-radio-group
              v-for="tutorial in unit.tutorials"
              v-model="tutorial_radio"
              :key="tutorial.day"
              class="pa-0 pt-2 ma-0"
              row>

              <!-- Layout contaning tutorials  -->

              <v-layout
                row
                wrap>

                <!-- Flex for radio button (Tutorial section) -->

                <v-flex 
                  xs2
                  style="margin: auto">
                  <v-radio 
                    value="radio-1"
                    class="ma-2 pa-0"
                    color="primary"/>
                </v-flex>
                
                <!-- Flex for day, time and location (Tutorial section) -->

                <v-flex xs5>
                  <v-card-actions
                    class="pa-0 mr-2">
                    <v-card-text
                      class="pa-0">
                      <div
                        class="pa-1">
                        <v-icon 
                          color="deep-purple darken-2">date_range</v-icon>
                        <span class="body-1 font-weight-medium">{{ tutorial.day }}</span>
                      </div>
                      <div
                        class="pa-1">
                        <v-icon
                          color="teal darken-2">schedule</v-icon>
                        <span class="body-1 font-weight-medium">{{ tutorial.time }}</span>
                      </div>
                      <div
                        class="pa-1">
                        <v-icon
                          color="red darken-2">room</v-icon>
                        <span class="body-1 font-weight-medium">{{ tutorial.location }}</span>
                      </div>
                    </v-card-text>
                  </v-card-actions>
                </v-flex>

                <!-- Flex for staff, start date and end date (Tutorial section) -->

                <v-flex xs5>
                  <v-card-actions 
                    class="pa-0">
                    <v-card-text
                      class="pa-0">
                      <div
                        class="pa-1">
                        <v-icon
                          color="blue darken-2">people</v-icon>
                        <span class="body-1 font-weight-medium">{{ tutorial.staff }}</span>
                      </div>
                      <div
                        class="pa-1">
                        <v-icon
                          color="orange darken-2">today</v-icon>
                        <span class="body-1 font-weight-medium">{{ tutorial.startdate }}</span>
                      </div>
                      <div
                        class="pa-1">
                        <v-icon
                          color="brown darken-2">event</v-icon>
                        <span class="body-1 font-weight-medium">{{ tutorial.enddate }}</span>
                      </div>
                    </v-card-text>
                  </v-card-actions>
                </v-flex>
               
                <!-- Divider flex (Tutorial section) -->

                <v-flex 
                  xs12
                  pa-2>
                  <v-divider/>
                </v-flex>
                
              </v-layout>
            </v-radio-group>
          </v-card>

        </v-expansion-panel-content>
      </v-expansion-panel>

      <!-- Bottom layout with button and searchbar -->

      <v-layout 
        row
        wrap
        class="bottom-searchbar ma-0">

        <!-- Button create timetable -->

        <v-flex
          xs12
          mb-2>
          <v-fab-transition>
            <v-btn
              v-show="!hidden"
              color="primary lighten-1"
              dark
              round
              to="/timetable"
            >
              Create Timetable 
            </v-btn>
          </v-fab-transition>
        </v-flex>
        
        <!-- Bottom search bar -->

        <v-layout elevation-20>
          <v-flex
            xs12
            ma-0>  
            <v-text-field
              class="primary lighten-1"
              solo
              flat
              label="Search Units"
              append-icon="search"
            />
          </v-flex>
        </v-layout>
      </v-layout>
    </v-flex>
    
  </v-layout>
</template>

<script>
export default {
  data: () => {
    return {
      hidden: false,
      units: [
        {
          id: '123',
          code: 'COIT20211',
          name: 'Programming in C++',
          classes: [
            {
              id: '1',
              type: 'lecture',
              day: 'Friday',
              time: '10:00 - 13:00',
              location: 'MEL 01/5.01',
              staff: 'Azmat, Ullahbvnmkkbhgcfxd,',
              startdate: '13/01/19',
              enddate: '18/03/19'
            },
            {
              id: '2',
              type: 'tutorial',
              day: 'Saturday',
              time: '10:00 - 13:00',
              location: 'MEL 01/4.01',
              staff: 'Azmat, Ullah',
              startdate: '13/03/19',
              enddate: '18/06/19'
            },
            {
              id: '3',
              type: 'tutorial',
              day: 'workshop',
              time: '08:00 - 12:00',
              location: 'MEL 01/4.01',
              staff: 'Azmat, Ullah',
              startdate: '13/03/19',
              enddate: '18/06/19'
            }
          ]
        }
      ],
      lecture_radio: '',
      tutorial_radio: ''
    }
  },
  created: function() {
    this.$nuxt.$emit('updatePageTitle', 'Units')
  }
}
</script>
