import { createApp, reactive } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

const gstore = reactive({ flashMessage: '' })
app.provide('gstore', gstore)

app.mount('#app')
