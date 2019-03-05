<template v-slot:activator="{ on }">
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
          v-for="section in sections"
          :key="section.title"
          class="rounded-corner mb-3">
          
          <div slot="header">
            {{ section.title }}
          </div>

          <v-card
            v-for="staff in section.staffs"
            :key="staff.name"
            @click.stop="dialog = true">
            <v-card-text class="grey lighten-4 pb-1 pl-4">{{ staff.name }}</v-card-text>
            <v-card-text class="grey lighten-4 pt-0 mt-0 pl-4 caption font-weight-thin">{{ staff.role }}</v-card-text>
            <v-divider/>
          </v-card>

        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-layout 
        class="bottom-searchbar ma-0">
          
        <v-flex
          xs12
          ma-0>  
          <v-text-field
            class="primary lighten-1"
            solo
            flat
            label="Search staff members"
            append-icon="search"
          />
        </v-flex>
      </v-layout>
    </v-flex>
    
    <v-dialog
      v-model="dialog"
      max-width="500"
    >
      <v-card
        class="rounded-corner">
        <v-card-text class="grey lighten-3 headline font-weight-thin text-xs-center pa-1 pt-2 font-weight-regular">Scott Morison</v-card-text>
        <v-card-text class="grey lighten-3 caption font-weight-thin text-xs-center pt-1">Student advisor</v-card-text>  
        
        <v-card-text>
          Lorem ipsum dolor sit amet, Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </v-card-text>

        <v-divider/>

        <v-layout
          row
          wrap>
          <v-flex
            xs4
            class="text-xs-right">
            <v-card-text 
              class="pl-4 pt-2 pb-0">Office:</v-card-text>
          </v-flex>
            
          <v-flex
            xs8>
            <v-card-text 
              class="pl-4 pt-2 pb-0">Level 1.01</v-card-text>
          </v-flex>
        </v-layout>

        <v-divider/>

        <v-card-actions>
          <v-spacer/>
          <v-btn
            color="primary"
            flat
            @click="dialog = false"
          >
            Okay
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

  </v-layout>
</template>

<script>
export default {
  data: () => {
    return {
      dialog: false,
      sections: [
        {
          title: 'Admin Staff',
          staffs: [
            {
              name: 'da',
              role: 'security'
            },
            {
              name: 'dan',
              role: 'surty'
            },
            {
              name: 'dann',
              role: 'surity'
            }
          ]
        },
        {
          title: 'Acedemic Staff',
          staffs: [
            {
              name: 'dansany',
              role: 'securit'
            },
            {
              name: 'dannasa',
              role: 'securi'
            },
            {
              name: 'danny',
              role: 'secuty'
            }
          ]
        },
        {
          title: 'Acedemic Staff',
          staffs: [
            {
              name: 'dansany',
              role: 'securit'
            },
            {
              name: 'dannasa',
              role: 'securi'
            },
            {
              name: 'danny',
              role: 'secuty'
            }
          ]
        },
        {
          title: 'Acedemic Staff',
          staffs: [
            {
              name: 'dansany',
              role: 'securit'
            },
            {
              name: 'dannasa',
              role: 'securi'
            },
            {
              name: 'danny',
              role: 'secuty'
            }
          ]
        },
        {
          title: 'Acedemic Staff',
          staffs: [
            {
              name: 'dansany',
              role: 'securit'
            },
            {
              name: 'dannasa',
              role: 'securi'
            },
            {
              name: 'danny',
              role: 'secuty'
            }
          ]
        },
        {
          title: 'Acedemic Staff',
          staffs: [
            {
              name: 'dansany',
              role: 'securit'
            },
            {
              name: 'dannasa',
              role: 'securi'
            },
            {
              name: 'danny',
              role: 'secuty'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style>
.bottom-searchbar {
  bottom: 0;
  right: 0;
  left: 0;
  position: fixed;
}
</style>
