<template>
  <v-layout
    row
    wrap>
    <v-carousel
      hide-controls
      hide-delimiters
      height="300">
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"/>
    </v-carousel>

      
    <v-flex
      pa-2
      pl-3
      ma-0
      text-xs-left>
      <h4 class="headline mb-0 pa-0">Select Game</h4>
    </v-flex>
    
  

    <v-flex
      xs12
      align-center
      pa-0
      ma-0>
      <v-card 
        class="gamingCards"
        color="ice_app_color"
        flat>
      
        <v-layout
          v-for="card in cards"
          :key="card.title"
          class="myColumn">
          
          <v-flex>
            <v-card
              class="rounded-corner">
              <v-img
                :src="card.imgSrc"
                class="mb-1"/>
          
              <v-card-title 
                primary-title
                class="pa-0" >  
                <v-flex
                  pa-0
                  ma-0
                  text-xs-center>
                  <h4 class="headline mb-0 pa-0">{{ card.title }}</h4>
                </v-flex>
              </v-card-title>
    
      
              <v-card-actions
                class="pa-0">
                <v-flex 
                  pa-0
                  ma-0
                  text-xs-center>
                  <v-btn 
                    flat 
                    color="primary lighten-1">View</v-btn>
                </v-flex>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-card>
    </v-flex>
  </v-layout>  
</template>

<script>
export default {
  name: 'Gaming',
  data: () => ({
    cards: [
      {
        title: 'Table Tennis',
        imgSrc: 'https://i.ibb.co/grXCyGX/2632.jpg'
      },
      {
        title: 'Xbox',
        imgSrc: 'https://i.ibb.co/nk8dq2W/game-2294201-1920.jpg'
      },
      {
        title: 'Foosball',
        imgSrc: 'https://i.ibb.co/Ny8s0F3/foosball-687603-1920.jpg'
      }
    ],

    items: [
      {
        src: 'https://i.ibb.co/4sG6ThJ/play-3116758-1920.png'
      }
    ]
  }),

  created: function() {
    this.$nuxt.$emit('updatePageTitle', 'Gaming')
  },

  methods: {}
}
</script>

<style>
.gamingCards {
  white-space: nowrap;
  display: -webkit-flex;
  flex-direction: row;
  -webkit-flex-direction: row;
  overflow-y: scroll;
  margin-right: 10px;
}
::-webkit-scrollbar {
  display: none;
}
.myColumn {
  margin-right: 10px;
  margin-bottom: 10px;
  margin-left: 10px;
  -webkit-flex: 1 1 auto;
  min-width: 200px;
  max-width: 300px;
}
</style>
