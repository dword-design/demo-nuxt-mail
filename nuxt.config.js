import dotenv from '@dword-design/dotenv-json-extended'

dotenv.config()

export default {
  modules: [
    '@nuxtjs/axios',
    ['nuxt-mail', {
      smtp: JSON.parse(process.env.MAIL_CONFIG || ''),
      message: { to: 'me@gmail.com' },
    }],
  ],
}
