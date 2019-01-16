import Vue from 'vue'
import Vuetify from 'vuetify'
import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
  theme: {
    primary: '#D97D54', // a color that is not in the material colors palette
    accent: colors.grey.darken3,
    secondary: colors.amber.darken3,
    info: colors.teal.lighten1,
    warning: colors.amber.base,
    error: colors.deepOrange.accent4,
    success: colors.green.accent3,
    rust_app_color: '#D97D54',
    sage_app_color: '#87BCBF',
    darb_app_color: '#324755',
    onyx_app_color: '#1B1C20',
    slate_app_color: '#6E8CA0',
    ice_app_color: '#F0F3F4',
    grey_font_color: '#798186'
  }
})
