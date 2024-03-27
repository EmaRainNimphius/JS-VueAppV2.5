

import { createApp } from 'vue'


// added for quasar
import { Quasar } from 'quasar'
// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'
// Import Quasar css
import 'quasar/src/css/index.sass'



import App from './App.vue'
import router from './router'

import "bootstrap/dist/css/bootstrap.css";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle";

const app = createApp(App)

// added for quasar
app.use(Quasar, {
    plugins: {}, // import Quasar plugins and add here
})

app.use(router)


app.mount('#app')
