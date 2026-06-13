import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import './assets/main.css'

const app = createApp(App)

// for animation component
app.directive('anim', {
    mounted(el, binding) {
        el.classList.add('manual-anim');
        
        const animType = binding.value || 'fade-up';
        el.classList.add(`anim-${animType}`);

        const observer = new IntersectionObserver((entries, observerInstance) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    el.classList.add('anim-show');
                    observerInstance.unobserve(el);
                }
            });
        }, { 
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        });

        observer.observe(el);
    }
});

app.use(router)

app.mount('#app')
