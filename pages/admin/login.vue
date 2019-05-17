<template>
  <v-layout
    row
    wrap>
    <v-flex
      md6
      offset-md3
      sm10
      offset-sm1
      xs10
      offset-xs1
      text-xs-center
      pb-0
      pt-0
      mt-5>
      <v-alert
        :value="alert.status"
        :icon="alert.icon"
        :color="alert.type"
        transition="scale-transition"
        outline
        style="font-size: x-large">
        {{ alert.msg }}
      </v-alert>
      <form
        v-if="!$store.state.authUser"
        @submit.prevent="login">
        <v-text-field
          v-model="userName"
          :error-messages="userNameErrors"
          :counter="10"
          label="Username"
          required
          outline
          color="purple darken-2"
          @input="$v.userName.$touch()"
          @blur="$v.userName.$touch()"/>
        <v-text-field
          v-model="password"
          :error-messages="passwordErrors"
          label="Password"
          required
          outline
          color="purple darken-2"
          @input="$v.password.$touch()"
          @blur="$v.password.$touch()"/>
        <v-btn
          round
          color="primary"
          dark
          @click="executeRecaptcha">
          Login
        </v-btn>
        <recaptcha
          ref="recaptcha"
          @verify="login" />
      </form>
      <v-alert
        v-if="$store.state.authUser"
        value="Already logged in"
        color="green"
        transition="scale-transition"
        outline
        style="font-size: x-large">
        you are logged in bro
      </v-alert>
    </v-flex>
  </v-layout>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required } from 'vuelidate/lib/validators'
import axios from 'axios'
import Recaptcha from '~/components/recaptcha'

export default {
  name: 'AdminLogin',
  components: {
    recaptcha: Recaptcha
  },
  mixins: [validationMixin],

  validations: {
    userName: { required },
    password: { required }
  },

  data: () => ({
    userName: '',
    password: '',
    alert: {
      status: false,
      icon: 'check_circle',
      type: 'success',
      msg: ''
    }
  }),

  computed: {
    userNameErrors() {
      const errors = []
      if (!this.$v.userName.$dirty) return errors
      !this.$v.userName.required && errors.push('Username is required.')
      return errors
    },
    passwordErrors() {
      const errors = []
      if (!this.$v.password.$dirty) return errors
      !this.$v.password.required && errors.push('Password is required')
      return errors
    }
  },
  created: function() {
    this.$nuxt.$emit('updatePageTitle', 'Admin Login')
  },
  methods: {
    executeRecaptcha() {
      this.alert.status = false
      this.$refs.recaptcha.execute()
    },
    login(recaptchaToken) {
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.alert.status = true
        this.alert.type = 'error'
        this.alert.icon = 'warning'
        this.alert.msg = 'Error in Logging in'
      } else {
        axios
          .post('/api/recaptcha/verify', {
            recaptchaToken: recaptchaToken
          })
          .then(response => {
            console.log(response)
            this.$store
              .dispatch('login', {
                username: this.userName,
                password: this.password
              })
              .then(() => {
                this.userName = ''
                this.password = ''
                this.$router.push({ path: '/admin' })
              })
              .catch(e => {
                this.alert.status = true
                this.alert.type = 'error'
                this.alert.icon = 'warning'
                this.alert.msg = e.response.data.msg
              })
          })
          .catch(err => {
            this.alert.status = true
            this.alert.type = 'error'
            this.alert.icon = 'warning'
            this.alert.msg = 'Error verifying ReCaptcha!'
          })
      }
    }
  }
}
</script>
