import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'

import { VApp } from 'vuetify/components'
import { VMain } from 'vuetify/components'
import { VBottomNavigation } from 'vuetify/components'

// import VueCompositionAPI from '@vue/composition-api'

const vuetify = createVuetify({
  components: {
    VApp,
    VMain,
    VBottomNavigation
  }
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vuetify)

app.mount('#app')
