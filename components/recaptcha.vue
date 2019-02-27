<template>
  <div 
    id="g-recaptcha"
    :data-sitekey="sitekey"
    class="g-recaptcha" />
</template>

<script>
export default {
  name: 'Recaptcha',
  data() {
    return {
      sitekey: '6LeJ-ZEUAAAAAL3n7vSYn4df1QmY7MbGBApDVE-y',
      widgetId: 0
    }
  },
  mounted() {
    // render the recaptcha widget when the component is mounted
    setTimeout(() => {
      this.render()
    }, 200)
  },
  methods: {
    execute() {
      window.grecaptcha.execute(this.widgetId)
    },
    reset() {
      window.grecaptcha.reset(this.widgetId)
    },
    render() {
      // console.log(window.grecaptcha)
      this.widgetId = window.grecaptcha.render('g-recaptcha', {
        sitekey: this.sitekey,
        size: 'invisible',
        // the callback executed when the user solve the recaptcha
        callback: response => {
          // emit an event called verify with the response as payload
          this.$emit('verify', response)
          // reset the recaptcha widget so you can execute it again
          this.reset()
        }
      })
    }
  }
}
</script>
