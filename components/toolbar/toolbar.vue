<template>
  <v-layout
    wrap
    style="height: 200px;">
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="mini"
      temporary
      fixed>
      <v-list class="pa-1">
        <v-list-tile
          v-if="mini"
          @click.stop="mini = !mini">
          <v-list-tile-action>
            <v-icon>chevron_right</v-icon>
          </v-list-tile-action>
        </v-list-tile>

        <v-list-tile
          avatar
          tag="div">
          <v-list-tile-avatar>
            <img src="https://i.ibb.co/FBCFyC9/00000-PORTRAIT-00000-BURST20180321151620375.jpg">
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>Khushal</v-list-tile-title>
          </v-list-tile-content>

          <v-list-tile-action>
            <v-btn
              icon
              @click.stop="mini = !mini">
              <v-icon>chevron_left</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>

      <v-list
        class="pt-0"
        dense>
        <v-divider light />

        <v-list-tile
          v-for="item in items"
          :key="item.title"
          :to="item.to">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <Footer
        v-if="!mini"
        @click.stop="mini = !mini"/>
    </v-navigation-drawer>
    <v-toolbar
      flat
      app
      dark 
      color="#ffffff">
      <v-btn icon>
        <v-icon 
          color="#000000"
          @click.stop="drawer = !drawer">dashboard</v-icon>
      </v-btn>
        
      <v-spacer />
      <v-toolbar-title class="black--text">{{ pageTitle }}</v-toolbar-title>
      <v-spacer />

      <v-btn 
        to="/"
        icon>
        <v-icon color="#000000">home</v-icon>
      </v-btn>
    </v-toolbar>
  </v-layout>
</template>

<script>
import Footer from './../footer/footer'
export default {
  components: {
    Footer
  },
  props: {
    pageTitle: {
      type: String,
      default: 'CLC App',
      requierd: true
    }
  },
  data: () => ({
    drawer: null,
    clipped: true,
    items: [
      { title: 'Home', icon: 'home', to: '/dashboard' },
      { title: 'Events', icon: 'event', to: '/events' },
      { title: 'Blog Posts', icon: 'assignment', to: '' },
      { title: 'Units', icon: 'library_books', to: '' },
      { title: 'Gaming', icon: 'extension', to: '' },
      { title: 'Staff Members', icon: 'supervisor_account', to: '' },
      { title: 'Feedback', icon: 'send', to: '/feedback' },
      { title: 'Idea/Suggestion', icon: 'new_releases', to: '' },
      { title: 'Settings', icon: 'settings', to: '/settings' }
    ],
    mini: false,
    right: null
  })
}
</script>
