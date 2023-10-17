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
import { VTextField } from 'vuetify/components'
import { VForm } from 'vuetify/components'
import { VBtn } from 'vuetify/components'
import { VLayout } from 'vuetify/components'
import { VAlert } from 'vuetify/components'

const vuetify = createVuetify({
  components: {
    VApp,
    VMain,
    VBottomNavigation,
    VForm,
    VTextField,
    VBtn,
    VLayout,
    VAlert
  }
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vuetify)

app.mount('#app')
