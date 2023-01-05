<template>
  <form>
    <label for="email">Your email address:</label>
    <input id="email" type="email" v-model="email" />
    <label for="message">Message:</label>
    <textarea id="message" v-model="message" />
    <button type="submit" @click.prevent="send">Send email</button>
  </form>
</template>

<script>
export default {
  data: () => ({
    email: '',
    message: '',
  }),
  methods: {
    send() {
      this.$mail.send({
        from: this.email,
        subject: 'Contact form message',
        text: this.message,
      })
    }
  }
}
</script>
