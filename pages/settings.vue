<template>
  <v-layout
    ma-0
    row
    wrap
    class="ice_app_color">
    <!-- flex layout for avatar -->
    <v-flex
      xs12
      sm12
      md12
      lg10
      offset-lg1
      xl8
      text-xs-center
      pt-5
      pb-5>
      <v-badge
        color="rust_app_color"
        bottom
        overlap>
        <span
          slot="badge">
          <v-icon
            color="ice_app_color"
            x-large>
            edit
          </v-icon>
        </span>
        <v-avatar
          size="127"
          color="grey lighten-4">
          <img
            src="https://i.ibb.co/FBCFyC9/00000-PORTRAIT-00000-BURST20180321151620375.jpg"
            alt="avatar">
        </v-avatar>
      </v-badge>
    </v-flex>
    <!-- flex layout for avatar -->
    <v-flex
      xs12
      lg10
      offset-lg1
      text-xs-center
      pb-0
      pt-0>
      <v-expansion-panel
        v-model="panel"
        popout
        expand>
        <!-- Account settings -->
        <v-expansion-panel-content>
          <div slot="header">
            Account
          </div>
          <v-form>
            <v-container>
              <v-layout
                row
                wrap>
                <v-flex>
                  <v-text-field
                    v-model="email"
                    :rules="[rules.email]"
                    label="CQU Email (optional)"
                    placeholder="Email..."
                    outline
                    color="purple darken-2" />
                </v-flex>
              </v-layout>
              <v-layout
                row
                wrap>
                <v-flex>
                  <v-text-field
                    v-model="phoneNumber"
                    :rules="[rules.phoneNumber]"
                    label="Phone Number (optional)"
                    placeholder="0412345678"
                    color="purple darken-2"
                    outline />
                </v-flex>
              </v-layout>
              <v-layout
                row
                wrap>
                <v-flex>
                  <v-text-field
                    label="UserName (optional)"
                    placeholder=""
                    color="purple darken-2"
                    outline />
                </v-flex>
              </v-layout>
              <v-layout
                row
                wrap>
                <v-layout
                  align-end
                  justify-end
                  fill-height>
                  <v-flex
                    xs4
                    sm2
                    md1>
                    <v-btn
                      round
                      color="primary"
                      dark>
                      Update
                    </v-btn>
                  </v-flex>
                </v-layout>
              </v-layout>
            </v-container>
          </v-form>
        </v-expansion-panel-content>

        <!-- Push notification settings -->
        <v-expansion-panel-content>
          <div slot="header">
            Push Nofification
          </div>
          <v-form>
            <v-container>
              <v-layout
                row
                wrap>
                <v-flex>
                  <!-- Event notification -->
                  <v-switch
                    v-model="eventNotificationSwitch"
                    :prepend-icon="(eventNotificationSwitch)?'notifications_active':'notifications_off'"
                    :value="eventNotificationSwitch"
                    label="Event notofications"
                    color="indigo darken-3" />
                  <!-- Game notification -->
                  <v-switch
                    v-model="gameNotificationSwitch"
                    :prepend-icon="(gameNotificationSwitch)?'notifications_active':'notifications_off'"
                    :value="gameNotificationSwitch"
                    label="Game notofications"
                    color="indigo darken-3" />
                  <!-- Blog post notification -->
                  <v-switch
                    v-model="blogNotificationSwitch"
                    :prepend-icon="(blogNotificationSwitch)?'notifications_active':'notifications_off'"
                    :value="blogNotificationSwitch"
                    label="Blog post notofications"
                    color="indigo darken-3" />
                </v-flex>
              </v-layout>
              <v-layout
                row
                wrap
                align-end
                justify-end
                fill-height>
                <v-flex
                  xs4
                  sm2
                  md2>
                  <v-btn
                    round
                    color="primary"
                    dark
                    class="right">
                    Update
                  </v-btn>
                </v-flex>
              </v-layout>
            </v-container>
          </v-form>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'Settings',
  data() {
    return {
      panel: [true, false],
      eventNotificationSwitch: true,
      gameNotificationSwitch: false,
      blogNotificationSwitch: true,
      phoneNumber: '',
      email: '',
      rules: {
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Invalid e-mail.'
        },
        phoneNumber: value => {
          const pattern = /^(0?[2-57-8])\)? ?(\d\d(?:[- ](?=\d{3})|(?!\d\d[- ]?\d[- ]))\d\d[- ]?\d[- ]?\d{3})$/
          return pattern.test(value) || 'Invalid phone number.'
        }
      }
    }
  },
  created: function() {
    this.$nuxt.$emit('updatePageTitle', 'Settings')
  }
}
</script>
