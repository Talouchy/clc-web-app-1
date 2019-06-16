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
            primary-title/>
          <v-img
            :src="plan"
            alt="Floor-map"
            max-height="300"
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
        <v-flex
          pt-3
          px-5
          xs12>
          <v-overflow-btn
            v-model="select"
            :items="levels"
            item-text="title"
            item-value="id"
            label="Choose level.."
            return-object
            @change="getLegends(select.id)"
          />
        </v-flex>
        <v-layout
          row
          wrap
          fluid
          align-center="true">
          
          <v-flex
            v-for="legend in wow"
            :key="legend.id"
            xs4
            sm3
            text-xs-center>
            <v-card
              flat
              tile>
              <img
                :src="legend.icon"
                height="30"
                width="30">
              <p v-text="legend.name"/>
            </v-card>
          </v-flex>
        </v-layout>
      </v-card>  
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  data: () => ({
    selectedId: 1,
    select: {
      id: '1',
      title: 'Ground Floor',
      plan: 'src',
      legends: []
    },
    levels: [
      {
        id: '1',
        title: 'Ground Floor',
        plan:
          'https://i.ibb.co/CsFxp5q/floorplan-preview-jpg-flinders-image-2200-low.jpg',
        legends: [
          {
            id: '1',
            name: 'cafeteria',
            icon: 'https://i.ibb.co/6vm2p55/coffe-cup-silhouette.png'
          },
          {
            id: '2',
            name: 'Parking',
            icon: 'https://i.ibb.co/BsXWFCb/letter-p.png'
          },
          {
            id: '3',
            name: 'Security desk',
            icon: 'https://i.ibb.co/gr7F18K/police-metal-plate.png'
          },
          {
            id: '4',
            name: 'Elevator',
            icon: 'https://i.ibb.co/Lx62xBZ/photo6024076432101191723.jpg'
          }
        ]
      },
      {
        id: '2',
        title: 'Level 1',
        plan: 'https://i.ibb.co/6grpNrY/interior-level-3.jpg',
        legends: [
          {
            id: '1',
            name: 'Information Desk',
            icon: 'https://i.ibb.co/Pz0sp64/luggage-information.png'
          },
          {
            id: '2',
            name: 'Elevator',
            icon: 'https://i.ibb.co/Lx62xBZ/photo6024076432101191723.jpg'
          },
          {
            id: '3',
            name: 'Toilet',
            icon: 'https://i.ibb.co/0ZTys7V/photo6024076432101191724.jpg'
          },
          {
            id: '4',
            name: 'Reading Area',
            icon: 'https://i.ibb.co/MCTH19F/teacher-reading.png'
          },
          {
            id: '5',
            name: 'First aid',
            icon: 'https://i.ibb.co/6tn4KXZ/pharmacy-cross-sign.png'
          }
        ]
      },
      {
        id: '3',
        title: 'Level 2',
        plan: 'https://i.ibb.co/FHV65Z1/level-two.jpg',
        legends: [
          {
            id: '1',
            name: 'Library',
            icon: 'https://i.ibb.co/hVn5BnS/photo6024076432101191725.jpg'
          },
          {
            id: '2',
            name: 'Dining Area',
            icon: 'https://i.ibb.co/ByhKCP7/knife-and-fork-silhouette.png'
          },
          {
            id: '3',
            name: 'Elevator',
            icon: 'https://i.ibb.co/Lx62xBZ/photo6024076432101191723.jpg'
          },
          {
            id: '4',
            name: 'Toilet',
            icon: 'https://i.ibb.co/0ZTys7V/photo6024076432101191724.jpg'
          },
          {
            id: '5',
            name: 'Reading Area',
            icon: 'https://i.ibb.co/MCTH19F/teacher-reading.png'
          },
          {
            id: '6',
            name: 'First aid',
            icon: 'https://i.ibb.co/6tn4KXZ/pharmacy-cross-sign.png'
          },
          {
            id: '7',
            name: 'Prayer room',
            icon: 'https://i.ibb.co/hy9kptV/om-symbol.png'
          }
        ]
      },
      {
        id: '4',
        title: 'Level 3',
        plan:
          'https://library.ucr.edu/sites/default/files/OrbachGroundFloor.jpg',
        legends: [
          {
            id: '1',
            name: 'Dining Area',
            icon: 'https://i.ibb.co/ByhKCP7/knife-and-fork-silhouette.png'
          },
          {
            id: '2',
            name: 'Elevator',
            icon: 'https://i.ibb.co/Lx62xBZ/photo6024076432101191723.jpg'
          },
          {
            id: '3',
            name: 'Toilet',
            icon: 'https://i.ibb.co/0ZTys7V/photo6024076432101191724.jpg'
          },
          {
            id: '4',
            name: 'Reading Area',
            icon: 'https://i.ibb.co/MCTH19F/teacher-reading.png'
          },
          {
            id: '5',
            name: 'First aid',
            icon: 'https://i.ibb.co/6tn4KXZ/pharmacy-cross-sign.png'
          },
          {
            id: '6',
            name: 'Class Room',
            icon: 'https://i.ibb.co/fGx3LvD/photo6024076432101191726.jpg'
          },
          {
            id: '7',
            name: 'Computer Lab',
            icon: 'https://i.ibb.co/v4yKBHk/photo6024076432101191727.jpg'
          }
        ]
      }
    ]
  }),
  computed: {
    wow() {
      console.log(this.selectedId)
      return this.levels[this.selectedId - 1].legends
    },
    plan() {
      return this.levels[this.selectedId - 1].plan
    }
  },
  created: function() {
    this.$nuxt.$emit('updatePageTitle', 'Floor Map')
  },
  methods: {
    getLegends(id) {
      this.selectedId = id
    }
  }
}
</script>
