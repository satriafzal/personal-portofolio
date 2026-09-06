import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import './assets/main.css'

// aos js
import AOS from 'aos'
import 'aos/dist/aos.css'

const app = createApp(App)

AOS.init({
    duration: 800,     
    easing: 'ease-out', 
    once: true,        
    offset: 50,        
});

app.use(router)

app.mount('#app')
