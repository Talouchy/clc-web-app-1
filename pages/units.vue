<template>
  <v-layout>
    <v-flex
      xs12
      lg10
      offset-lg1
      text-xs-center
      pa-1>

      <v-flex
        class="top: 0px;">
        <v-alert
          :value="!getUnitsStatus?displayedUnits.length==0?true:false:false"
          color="info"
          icon="info"
          outline>
          This is an info alert.
        </v-alert>
      </v-flex>
      
      <v-flex class="mb-5 pb-5">
        <v-expansion-panel  
          popout
          pb-3
        >
          <v-expansion-panel-content
            v-for="unit in displayedUnits"
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
              class="grey lighten-3">
              <div>
                <!-- Lecture Start -->
                <v-card-title
                  :style="{display: (unit.classes.filter((clss, index, array) => clss.type == 'lecture').length == 0)?'none':'block'}"
                  class="subheading grey lighten-2 pa-2 font-weight-medium mb-1">
                  Lecture
                </v-card-title>
                <v-radio-group
                  :style="{display: (unit.classes.filter((clss, index, array) => clss.type == 'lecture').length == 0)?'none':'block'}"
                  class="pa-0 pl-1 ma-0"
                  column>
                  <v-layout
                    v-for="classes in unit.classes.filter((clss, index, array) => {
                      return clss.type == 'lecture'
                    })"
                    :key="classes._id" 
                    row
                    wrap
                    class="ma-1">
                    <v-flex
                      xs1
                      style="margin: auto">
                      <v-radio 
                        :value="classes._id"
                        class="pa-0"
                        color="primary"/>
                    </v-flex>
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
                            <span class="body-1 font-weight-medium">{{ classes.day }}</span>
                          </div>
                          <div
                            class="pa-1">
                            <v-icon
                              color="teal darken-2">schedule</v-icon>
                            <span class="body-1 font-weight-medium">{{ classes.time }}</span>
                          </div>
                          <div
                            class="pa-1">
                            <v-icon
                              color="red darken-2">room</v-icon>
                            <span class="body-1 font-weight-medium">{{ classes.location }}</span>
                          </div>
                        </v-card-text>
                      </v-card-actions>
                    </v-flex>
                    <v-flex xs5>
                      <v-card-actions 
                        class="pa-0">
                        <v-card-text
                          class="pa-0">
                          <div
                            class="pa-1">
                            <v-icon
                              color="orange darken-2">today</v-icon>
                            <span class="body-1 font-weight-medium">{{ classes.startDate }}</span>
                          </div>
                          <div
                            class="pa-1">
                            <v-icon
                              color="brown darken-2">event</v-icon>
                            <span class="body-1 font-weight-medium">{{ classes.endDate }}</span>
                          </div>
                        </v-card-text>
                      </v-card-actions>
                    </v-flex>
                    <v-flex xs1/>
                    <v-flex xs11>
                      <div
                        class="pa-1 pb-2">
                        <v-icon
                          color="blue darken-2">people</v-icon>
                        <span class="body-1 font-weight-medium">{{ classes.staff }}</span>
                      </div>
                    </v-flex>
                    <v-divider
                      inset/>
                  </v-layout>
                </v-radio-group>
  
                <!-- Tutorial Start -->
                <v-card-title
                  :style="{display: (unit.classes.filter((clss, index, array) => clss.type == 'tutorial').length == 0)?'none':'block'}"
                  class="subheading grey lighten-2 pa-2 font-weight-medium mb-1">
                  Tutorial
                </v-card-title>
                <v-radio-group
                  :style="{display: (unit.classes.filter((clss, index, array) => clss.type == 'tutorial').length == 0)?'none':'block'}"
                  class="pa-0 pl-1 ma-0"
                  column>
                  <v-layout
                    v-for="classes in unit.classes.filter((clss, index, array) => {
                      return clss.type == 'tutorial'
                    })"
                    :key="classes._id" 
                    row
                    wrap
                    class="ma-1">
                    <v-flex
                      xs1
                      style="margin: auto">
                      <v-radio 
                        :value="classes._id"
                        class="pa-0"
                        color="primary"/>
                    </v-flex>
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
                            <span class="body-1 font-weight-medium">{{ classes.day }}</span>
                          </div>
                          <div
                            class="pa-1">
                            <v-icon
                              color="teal darken-2">schedule</v-icon>
                            <span class="body-1 font-weight-medium">{{ classes.time }}</span>
                          </div>
                          <div
                            class="pa-1">
                            <v-icon
                              color="red darken-2">room</v-icon>
                            <span class="body-1 font-weight-medium">{{ classes.location }}</span>
                          </div>
                        </v-card-text>
                      </v-card-actions>
                    </v-flex>
                    <v-flex xs5>
                      <v-card-actions 
                        class="pa-0">
                        <v-card-text
                          class="pa-0">
                          <div
                            class="pa-1">
                            <v-icon
                              color="orange darken-2">today</v-icon>
                            <span class="body-1 font-weight-medium">{{ classes.startDate }}</span>
                          </div>
                          <div
                            class="pa-1">
                            <v-icon
                              color="brown darken-2">event</v-icon>
                            <span class="body-1 font-weight-medium">{{ classes.endDate }}</span>
                          </div>
                        </v-card-text>
                      </v-card-actions>
                    </v-flex>
                    <v-flex xs1/>
                    <v-flex xs11>
                      <div
                        class="pa-1 pb-2">
                        <v-icon
                          color="blue darken-2">people</v-icon>
                        <span class="body-1 font-weight-medium">{{ classes.staff }}</span>
                      </div>
                    </v-flex>
                    <v-divider
                      inset/>
                  </v-layout>
                </v-radio-group>

                <!-- Workshop Start -->
                <v-card-title
                  :style="{display: (unit.classes.filter((clss, index, array) => clss.type == 'workshop').length == 0)?'none':'block'}"
                  class="subheading grey lighten-2 pa-2 font-weight-medium mb-1">
                  Workshop
                </v-card-title>
                <v-radio-group
                  :style="{display: (unit.classes.filter((clss, index, array) => clss.type == 'workshop').length == 0)?'none':'block'}"
                  class="pa-0 pl-1 ma-0"
                  column>
                  <v-layout
                    v-for="classes in unit.classes.filter((clss, index, array) => {
                      return clss.type == 'workshop'
                    })"
                    :key="classes._id" 
                    row
                    wrap
                    class="ma-1">
                    <v-flex
                      xs1
                      style="margin: auto">
                      <v-radio 
                        :value="classes._id"
                        class="pa-0"
                        color="primary"/>
                    </v-flex>
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
                            <span class="body-1 font-weight-medium">{{ classes.day }}</span>
                          </div>
                          <div
                            class="pa-1">
                            <v-icon
                              color="teal darken-2">schedule</v-icon>
                            <span class="body-1 font-weight-medium">{{ classes.time }}</span>
                          </div>
                          <div
                            class="pa-1">
                            <v-icon
                              color="red darken-2">room</v-icon>
                            <span class="body-1 font-weight-medium">{{ classes.location }}</span>
                          </div>
                        </v-card-text>
                      </v-card-actions>
                    </v-flex>
                    <v-flex xs5>
                      <v-card-actions 
                        class="pa-0">
                        <v-card-text
                          class="pa-0">
                          <div
                            class="pa-1">
                            <v-icon
                              color="orange darken-2">today</v-icon>
                            <span class="body-1 font-weight-medium">{{ classes.startDate }}</span>
                          </div>
                          <div
                            class="pa-1">
                            <v-icon
                              color="brown darken-2">event</v-icon>
                            <span class="body-1 font-weight-medium">{{ classes.endDate }}</span>
                          </div>
                        </v-card-text>
                      </v-card-actions>
                    </v-flex>
                    <v-flex xs1/>
                    <v-flex xs11>
                      <div
                        class="pa-1 pb-2">
                        <v-icon
                          color="blue darken-2">people</v-icon>
                        <span class="body-1 font-weight-medium">{{ classes.staff }}</span>
                      </div>
                    </v-flex>
                    <v-divider
                      inset/>
                  </v-layout>
                </v-radio-group>

                <!-- Laboratory Start -->
                <v-card-title
                  :style="{display: (unit.classes.filter((clss, index, array) => clss.type == 'laboratory').length == 0)?'none':'block'}"
                  class="subheading grey lighten-2 pa-2 font-weight-medium mb-1">
                  Laboratory
                </v-card-title>
                <v-radio-group
                  :style="{display: (unit.classes.filter((clss, index, array) => clss.type == 'laboratory').length == 0)?'none':'block'}"
                  class="pa-0 pl-1 ma-0"
                  column>
                  <v-layout
                    v-for="classes in unit.classes.filter((clss, index, array) => {
                      return clss.type == 'laboratory'
                    })"
                    :key="classes._id" 
                    row
                    wrap
                    class="ma-1">
                    <v-flex
                      xs1
                      style="margin: auto">
                      <v-radio 
                        :value="classes._id"
                        class="pa-0"
                        color="primary"/>
                    </v-flex>
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
                            <span class="body-1 font-weight-medium">{{ classes.day }}</span>
                          </div>
                          <div
                            class="pa-1">
                            <v-icon
                              color="teal darken-2">schedule</v-icon>
                            <span class="body-1 font-weight-medium">{{ classes.time }}</span>
                          </div>
                          <div
                            class="pa-1">
                            <v-icon
                              color="red darken-2">room</v-icon>
                            <span class="body-1 font-weight-medium">{{ classes.location }}</span>
                          </div>
                        </v-card-text>
                      </v-card-actions>
                    </v-flex>
                    <v-flex xs5>
                      <v-card-actions 
                        class="pa-0">
                        <v-card-text
                          class="pa-0">
                          <div
                            class="pa-1">
                            <v-icon
                              color="orange darken-2">today</v-icon>
                            <span class="body-1 font-weight-medium">{{ classes.startDate }}</span>
                          </div>
                          <div
                            class="pa-1">
                            <v-icon
                              color="brown darken-2">event</v-icon>
                            <span class="body-1 font-weight-medium">{{ classes.endDate }}</span>
                          </div>
                        </v-card-text>
                      </v-card-actions>
                    </v-flex>
                    <v-flex xs1/>
                    <v-flex xs11>
                      <div
                        class="pa-1 pb-2">
                        <v-icon
                          color="blue darken-2">people</v-icon>
                        <span class="body-1 font-weight-medium">{{ classes.staff }}</span>
                      </div>
                    </v-flex>
                    <v-divider
                      inset/>
                  </v-layout>
                </v-radio-group>

                <!-- Res School Start -->
                <v-card-title
                  :style="{display: (unit.classes.filter((clss, index, array) => clss.type == 'res_school').length == 0)?'none':'block'}"
                  class="subheading grey lighten-2 pa-2 font-weight-medium mb-1">
                  Res School
                </v-card-title>
                <v-radio-group
                  :style="{display: (unit.classes.filter((clss, index, array) => clss.type == 'res_school').length == 0)?'none':'block'}"
                  class="pa-0 pl-1 ma-0"
                  column>
                  <v-layout
                    v-for="classes in unit.classes.filter((clss, index, array) => {
                      return clss.type == 'res_school'
                    })"
                    :key="classes._id" 
                    row
                    wrap
                    class="ma-1">
                    <v-flex
                      xs1
                      style="margin: auto">
                      <v-radio 
                        :value="classes._id"
                        class="pa-0"
                        color="primary"/>
                    </v-flex>
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
                            <span class="body-1 font-weight-medium">{{ classes.day }}</span>
                          </div>
                          <div
                            class="pa-1">
                            <v-icon
                              color="teal darken-2">schedule</v-icon>
                            <span class="body-1 font-weight-medium">{{ classes.time }}</span>
                          </div>
                          <div
                            class="pa-1">
                            <v-icon
                              color="red darken-2">room</v-icon>
                            <span class="body-1 font-weight-medium">{{ classes.location }}</span>
                          </div>
                        </v-card-text>
                      </v-card-actions>
                    </v-flex>
                    <v-flex xs5>
                      <v-card-actions 
                        class="pa-0">
                        <v-card-text
                          class="pa-0">
                          <div
                            class="pa-1">
                            <v-icon
                              color="orange darken-2">today</v-icon>
                            <span class="body-1 font-weight-medium">{{ classes.startDate }}</span>
                          </div>
                          <div
                            class="pa-1">
                            <v-icon
                              color="brown darken-2">event</v-icon>
                            <span class="body-1 font-weight-medium">{{ classes.endDate }}</span>
                          </div>
                        </v-card-text>
                      </v-card-actions>
                    </v-flex>
                    <v-flex xs1/>
                    <v-flex xs11>
                      <div
                        class="pa-1 pb-2">
                        <v-icon
                          color="blue darken-2">people</v-icon>
                        <span class="body-1 font-weight-medium">{{ classes.staff }}</span>
                      </div>
                    </v-flex>
                    <v-divider
                      inset/>
                  </v-layout>
                </v-radio-group>

                <!-- Presentation Start -->
                <v-card-title
                  :style="{display: (unit.classes.filter((clss, index, array) => clss.type == 'presentation').length == 0)?'none':'block'}"
                  class="subheading grey lighten-2 pa-2 font-weight-medium mb-1">
                  Presentation
                </v-card-title>
                <v-radio-group
                  :style="{display: (unit.classes.filter((clss, index, array) => clss.type == 'presentation').length == 0)?'none':'block'}"
                  class="pa-0 pl-1 ma-0"
                  column>
                  <v-layout
                    v-for="classes in unit.classes.filter((clss, index, array) => {
                      return clss.type == 'presentation'
                    })"
                    :key="classes._id" 
                    row
                    wrap
                    class="ma-1">
                    <v-flex
                      xs1
                      style="margin: auto">
                      <v-radio 
                        :value="classes._id"
                        class="pa-0"
                        color="primary"/>
                    </v-flex>
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
                            <span class="body-1 font-weight-medium">{{ classes.day }}</span>
                          </div>
                          <div
                            class="pa-1">
                            <v-icon
                              color="teal darken-2">schedule</v-icon>
                            <span class="body-1 font-weight-medium">{{ classes.time }}</span>
                          </div>
                          <div
                            class="pa-1">
                            <v-icon
                              color="red darken-2">room</v-icon>
                            <span class="body-1 font-weight-medium">{{ classes.location }}</span>
                          </div>
                        </v-card-text>
                      </v-card-actions>
                    </v-flex>
                    <v-flex xs5>
                      <v-card-actions 
                        class="pa-0">
                        <v-card-text
                          class="pa-0">
                          <div
                            class="pa-1">
                            <v-icon
                              color="orange darken-2">today</v-icon>
                            <span class="body-1 font-weight-medium">{{ classes.startDate }}</span>
                          </div>
                          <div
                            class="pa-1">
                            <v-icon
                              color="brown darken-2">event</v-icon>
                            <span class="body-1 font-weight-medium">{{ classes.endDate }}</span>
                          </div>
                        </v-card-text>
                      </v-card-actions>
                    </v-flex>
                    <v-flex xs1/>
                    <v-flex xs11>
                      <div
                        class="pa-1 pb-2">
                        <v-icon
                          color="blue darken-2">people</v-icon>
                        <span class="body-1 font-weight-medium">{{ classes.staff }}</span>
                      </div>
                    </v-flex>
                    <v-divider
                      inset/>
                  </v-layout> 
                </v-radio-group>

                <!-- Practical Start -->
                <v-card-title
                  :style="{display: (unit.classes.filter((clss, index, array) => clss.type == 'practical').length == 0)?'none':'block'}"
                  class="subheading grey lighten-2 pa-2 font-weight-medium mb-1">
                  Practical
                </v-card-title>
                <v-radio-group
                  :style="{display: (unit.classes.filter((clss, index, array) => clss.type == 'practical').length == 0)?'none':'block'}"
                  class="pa-0 pl-1 ma-0"
                  column>
                  <v-layout
                    v-for="classes in unit.classes.filter((clss, index, array) => {
                      return clss.type == 'practical'
                    })"
                    :key="classes._id" 
                    row
                    wrap
                    class="ma-1">
                    <v-flex
                      xs1
                      style="margin: auto">
                      <v-radio 
                        :value="classes._id"
                        class="pa-0"
                        color="primary"/>
                    </v-flex>
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
                            <span class="body-1 font-weight-medium">{{ classes.day }}</span>
                          </div>
                          <div
                            class="pa-1">
                            <v-icon
                              color="teal darken-2">schedule</v-icon>
                            <span class="body-1 font-weight-medium">{{ classes.time }}</span>
                          </div>
                          <div
                            class="pa-1">
                            <v-icon
                              color="red darken-2">room</v-icon>
                            <span class="body-1 font-weight-medium">{{ classes.location }}</span>
                          </div>
                        </v-card-text>
                      </v-card-actions>
                    </v-flex>
                    <v-flex xs5>
                      <v-card-actions 
                        class="pa-0">
                        <v-card-text
                          class="pa-0">
                          <div
                            class="pa-1">
                            <v-icon
                              color="orange darken-2">today</v-icon>
                            <span class="body-1 font-weight-medium">{{ classes.startDate }}</span>
                          </div>
                          <div
                            class="pa-1">
                            <v-icon
                              color="brown darken-2">event</v-icon>
                            <span class="body-1 font-weight-medium">{{ classes.endDate }}</span>
                          </div>
                        </v-card-text>
                      </v-card-actions>
                    </v-flex>
                    <v-flex xs1/>
                    <v-flex xs11>
                      <div
                        class="pa-1 pb-2">
                        <v-icon
                          color="blue darken-2">people</v-icon>
                        <span class="body-1 font-weight-medium">{{ classes.staff }}</span>
                      </div>
                    </v-flex>
                    <v-divider
                      inset/>
                  </v-layout> 
                </v-radio-group>
              </div>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-flex>

      <!-- Bottom layout with button and searchbar -->      
      <!-- Bottom search bar -->
      <v-flex
        class="bottom-searchbar"
        xs12
        ma-0>
        <!-- Button create timetable -->
        <v-btn
          v-show="!hidden"
          :style="{visibility: !getUnitsStatus?'visible':'hidden'}"
          color="primary lighten-1"
          dark
          round
          to="/timetable">
          Create Timetable 
        </v-btn>
        <v-progress-linear 
          :indeterminate="getUnitsStatus"
          class="ma-0"/>
        <v-text-field
          id="search"
          :append-icon="'search'"
          :disabled="!getUnitsStatus?false:true"
          class="primary lighten-1"
          solo
          flat
          label="ppmp20007..."
          @click:append="findUnits()"
        />
      </v-flex>
    </v-flex>
    
  </v-layout>
</template>

<script>
import axios from 'axios'
import { mapState, mapGetters, mapMutations } from 'vuex'

export default {
  data: () => {
    return {
      displayedUnits: [],
      hidden: false,
      loading: false
    }
  },
  computed: {
    ...mapGetters(['getUnitsByText', 'getUnitsStatus']),
    ...mapState(['units']),
    testing() {
      if (!this.getUnitsStatus) {
        if (this.displayedUnits.length == 0) {
          return true
        } else {
          return false
        }
      } else {
        return false
      }
    }
  },
  created: function() {
    this.$nuxt.$emit('updatePageTitle', 'Units')
    this.$store.dispatch('fetchUnits')
  },
  methods: {
    findUnits() {
      this.displayedUnits = this.getUnitsByText(
        document.querySelector('#search').value
      )
    }
  }
}
</script>
