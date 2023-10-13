import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'

import { VFooter } from 'vuetify/components/VFooter'
import { VBottomNavigation } from 'vuetify/components'

// import VueCompositionAPI from '@vue/composition-api'

const vuetify = createVuetify({
  components: {
    VFooter,
    VBottomNavigation
  }
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vuetify)

app.mount('#app')
