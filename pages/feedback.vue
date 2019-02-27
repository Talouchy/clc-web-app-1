<template>
  <v-layout
    row
    wrap>
    <v-container>
      <v-layout
        row
        wrap>
        <v-flex
          md12
          xs12
          sm12>
          <v-layout
            align-content-center
            row
            wrap
            class="rust_app_color"
            pa-2
          >
            <!-- flex layout for feedback title -->
            <v-flex>
              <v-card
                flat
                class="rust_app_color">
                <v-card-text
                  class=" text-md-center text-sm-center headline white--text font-weight-medium">
                  Please send us your feedback
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
          <!-- layout for feedback textarea -->
        </v-flex>
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
            ref="feedbackForm"
            action="api/feedbacks"
            method="post">
            <v-text-field
              v-model="email"
              :error-messages="emailErrors"
              label="E-mail"
              outline
              placeholder="example@example.com"
              color="purple darken-2"
              @input="$v.email.$touch()"
              @blur="$v.email.$touch()"
              @click="resetForm"/>
            <v-textarea
              v-model="feedbackMsg"
              :error-messages="feedbackErrors"
              outline
              label="Feedback"
              placeholder="Write your feedback here..."
              color="purple darken-2"
              height="300px"
              @input="$v.feedbackMsg.$touch()"
              @blur="$v.feedbackMsg.$touch()"
              @click="resetForm"/>
          </form>
        </v-flex>
      </v-layout>
      <v-layout
        align-end
        justify-end
        fill-height>
        <v-flex
          xs6
          sm3
          md2>
          <v-btn
            round
            color="primary"
            dark
            class="right"
            @click="executeRecaptcha">
            Send Feedback
          </v-btn>
          <recaptcha
            ref="recaptcha"
            @verify="submit" />
        </v-flex>
      </v-layout>
    </v-container>
  </v-layout>
</template>

<script type="text/javascript">
var onloadCallback = function() {
  alert('grecaptcha is ready!')
  this.render()
}
window.onloadCallback = onloadCallback()
</script>

<script>
import { validationMixin } from 'vuelidate'
import { required, maxLength, email } from 'vuelidate/lib/validators'
import axios from 'axios'
import Recaptcha from '~/components/recaptcha'

export default {
  name: 'Feedback',
  components: {
    recaptcha: Recaptcha
  },
  mixins: [validationMixin],
  validations: {
    feedbackMsg: {
      required,
      maxLength: maxLength(300)
    },
    email: {
      required,
      email
    }
  },
  data: () => ({
    feedbackMsg: '',
    email: '',
    alert: {
      status: false,
      icon: 'check_circle',
      type: 'success',
      msg: 'Feedback sent. Thank you.'
    }
  }),
  computed: {
    feedbackErrors() {
      const errors = []
      if (!this.$v.feedbackMsg.$dirty) return errors
      !this.$v.feedbackMsg.maxLength &&
        errors.push('Feedback must be at most 300 characters long')
      !this.$v.feedbackMsg.required &&
        errors.push('Feedback message is required')
      return errors
    },
    emailErrors() {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push('Must be valid e-mail')
      !this.$v.email.required && errors.push('E-mail is required')
      return errors
    }
  },
  mounted() {},
  created: function() {
    this.$nuxt.$emit('updatePageTitle', 'Feedback')
  },
  methods: {
    executeRecaptcha() {
      this.$refs.recaptcha.execute()
    },
    submit(recaptchaToken) {
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.alert.status = true
        this.alert.type = 'error'
        this.alert.icon = 'warning'
        this.alert.msg = 'Error in sending the feedback'
      } else {
        axios
          .post('/api/recaptcha/verify', {
            email: self.email,
            feedbackMsg: self.feedbackMsg,
            recaptchaToken: recaptchaToken
          })
          .then(response => {
            console.log(response)
            axios
              .post('/api/feedbacks', {
                message: this.feedbackMsg,
                userID: '1234',
                email: this.email
              })
              .then(response => {
                console.log(response)
                this.alert.status = true
                this.alert.type = 'success'
                this.alert.icon = 'check_circle'
                this.alert.msg = 'Feedback sent. Thank you for your feedback.'
              })
              .catch(error => {
                console.log(error)
                this.alert.status = true
                this.alert.type = 'error'
                this.alert.icon = 'warning'
                this.alert.msg = 'Error in sending the feedback'
              })
          })
          .catch(err => {
            this.alert.status = true
            this.alert.type = 'error'
            this.alert.icon = 'warning'
            this.alert.msg = 'Error verifying ReCaptcha!'
          })
      }
    },
    resetForm() {
      this.$v.$reset
      this.alert.status = false
    }
  }
}
</script>
