import dotenv from '@dword-design/dotenv-json-extended'

dotenv.config()

const mailConfig = process.env.MAIL_CONFIG!;

export default defineNuxtConfig({
  modules: [
    ['nuxt-mail', {
      smtp: JSON.parse(mailConfig),
      message: { to: 'me@gmail.com' },
    }],
  ],
});
