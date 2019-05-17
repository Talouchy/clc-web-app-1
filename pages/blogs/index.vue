<template>
  <v-layout
    ma-0
    row
    wrap
    class="ice_app_color">
    <!-- flex layout for avatar -->
    <v-flex
      v-for="i in 5"
      :key="`1${i}`"
      xs12
      sm8
      offset-sm2
      md6
      offset-md3
      lg6
      offset-lg3
      text-xs-center
      pb-0
      pt-0
      px-3
      py-3>
      <v-card
        elivation-10
        class="rounded-corner">
        <v-layout
          row
          wrap
          pa-2
          align-center>
          <!-- flex layout for avatar -->
          <v-flex
            xs3
            text-xs-center>
            <v-avatar
              :tile="tile"
              :size="size"
              color="grey lighten-4">
              <img
                src="https://www.studymelbourne.vic.gov.au/__data/assets/image/0029/25688/181024.porter.novelli.study.melb-1032-870x580.jpg"
                alt="Study Melbourne Ambassador">
            </v-avatar>
          </v-flex>

          <!-- flex layout for student name -->
          <v-flex
            xs9
            text-xs-left>
            <v-card flat>
              <v-card-text
                class="title black--text font-weight-medium pb-0">
                Study Melbourne Ambassador
              </v-card-text
              >
              <v-card-text
                class="body-1 font-weight-regular pt-1 grey_font_color--text">
                November 29, 2018
              </v-card-text>
            </v-card>
          </v-flex>
          <!-- Layout for read more button -->
          <v-layout justify-start>
            <v-flex>
              <v-card flat>
                <v-card-text>
                  <p class="text-xs-left body-2">
                    We are looking for students and alumni to help create a rich and supportive community for current and prospective international students in Victoria.
                    Ambassadors will join Study Melbourne to help organise student events, create content to share across Study Melbourne channels, represent Study Melbourne at official functions, and share experiences and knowledge with the international student community.
                  </p>
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
          <v-layout justify-center>
            <v-flex
              xs12
              text-xs-center>
              <v-btn
                :to="`/blogs/${i}`"
                flat
                color="">
                <v-icon
                  left
                  dark
                  class="mr-0">
                  bookmark
                </v-icon>
                Bookmark
              </v-btn>
              <v-btn
                :to="`/blogs/${i}`"
                flat>
                <v-icon
                  left
                  dark
                  class="mr-1">
                  more
                </v-icon>
                Read more...
              </v-btn>
            </v-flex>
          </v-layout>
        </v-layout>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'Blogs',
  data() {
    return {
      tile: false,
      t: true,
      size: 75
    }
  },
  created: function() {
    this.$nuxt.$emit('updatePageTitle', 'Blogs')
  }
}
</script>
