<template>
  <v-layout
    row
    wrap>
    <v-flex>
      <!-- this layout is set to occupy viewing area of app 
    when viewing on smaller devices i.e. phones it occupies 4 space for image and 8 for name
    when the app viewed on larger device i.e. tablet or above it will set image 5 space for image and 7 for name -->
      <v-flex>
        <v-layout
          row
          wrap
          class="primary lighten-1"
          pa-2>
          <!-- flex layout for avatar -->
          <v-flex
            xs4
            sm5
            pr-2
            pt-3
            pb-2
            text-xs-right>
            <v-avatar
              :tile="tile"
              :size="size"
              color="grey lighten-4">
              <img
                src="https://i.ibb.co/FBCFyC9/00000-PORTRAIT-00000-BURST20180321151620375.jpg"
                alt="00000-PORTRAIT-00000-BURST20180321151620375" >
            </v-avatar>
          </v-flex>

          <!-- flex layout for student name -->
          <v-flex
            xs8
            sm7
            align-self-center
            text-md-start
            text-xs-start>
            <v-card
              flat
              class="primary lighten-1">
              <v-card-text
                class="headline white--text font-weight-medium">
                Hey Khushal
              </v-card-text>
            </v-card>
          </v-flex>

          <!-- flex layout for quotes -->
          <v-flex
            xs12
            pa-0,
            ma-0
            align-self-center
            text-md-center
            text-xs-center>
            <v-card
              flat
              class="primary lighten-1">
              <!-- card text for quote -->
              <v-card-text
                class="text-no-wrap regular white--text font-weight-regular"
                v-text="quote" />

              <!-- card text for authers name  -->
              <v-card-text
                class="regular white--text font-weight-regular"
                v-text="author_quote" />
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>

      <v-flex>
        <v-layout
          pa-3
          align-center>
          <v-flex text-xs-center>
            <v-card
              class="rounded-corner"
              elevation-10>
              <v-layout
                row
                wrap
                fluid
                align-center="true">
                <v-flex
                  v-for="card in cards"
                  v-bind="{ [`xs${card.flex}`]: true }"
                  :key="card.title"
                  pt-3
                >
                  <v-card
                    :ripple="rippleOn"
                    :to="card.to"
                    flat
                    tile>
                    <img
                      :src="card.imgSrc"
                      height="60"
                      width="60" >

                    <p v-text="card.title" />
                  </v-card>
                </v-flex>
              </v-layout>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    tile: false,
    rippleOn: true,
    size: 80,
    quote: "It's not what you look at that matters, it's what you see.",
    author_quote: '-Henry David Thoreau',

    cards: [
      {
        title: 'Floor Map',
        to: '/floor_map',
        imgSrc: 'https://i.ibb.co/br2bxrZ/route.png',
        flex: 4
      },
      {
        title: 'Events',
        to: '/events',
        imgSrc: 'https://i.ibb.co/K245nTm/buffet-1.png',
        flex: 4
      },
      {
        title: 'Blog post',
        to: '',
        imgSrc: 'https://i.ibb.co/DWyTPsW/social-media-1.png',
        flex: 4
      },
      {
        title: 'Units',
        to: '',
        imgSrc: 'https://i.ibb.co/BK91HPV/books-1.png',
        flex: 4
      },
      {
        title: 'Gaming',
        to: '/games',
        imgSrc: 'https://i.ibb.co/qJsTnKX/jigsaw-2.png',
        flex: 4
      },
      {
        title: 'Staff members',
        to: '',
        imgSrc: 'https://i.ibb.co/vYYmm0d/team-1.png',
        flex: 4
      }
    ]
  }),
  created: function() {
    this.$nuxt.$emit('updatePageTitle', 'Dashboard')
  }
}
</script>

<style>
.rounded-corner {
  border-radius: 20px;
}
</style>
