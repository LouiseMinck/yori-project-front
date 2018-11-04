module.exports = {

  mode: "universal",
  css: [
    '@/assets/style/main.scss'
  ],

  plugins: [
    { src: '~components/Chart.vue', ssr: false },
  ],

  link: [
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Poppins'},
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat'},
  ],

  /*
  ** Headers of the page
  */
  head: {
    title: 'yori_project_front',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/img/favicon.png' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    vendor: ['axios'],

    extend (config, { isDev }) {
      if (isDev && process.client) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
};

