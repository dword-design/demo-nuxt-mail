<template>
  <form>
    <label for="email">Your email address:</label>
    <input id="email" type="email" v-model="email" />
    <label for="message">Message:</label>
    <textarea id="message" v-model="message" />
    <button type="submit" @click.prevent="send">Send email</button>
  </form>
</template>

<script setup lang="ts">
const email = ref('');
const message = ref('');

const mail = useMail();

const send = () => mail.send({
  from: email.value,
  subject: 'Contact form message',
  text: message.value,
})
</script>
