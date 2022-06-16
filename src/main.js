import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import ZSiteSection from '@/components/z-site-section.vue'

const app = createApp(App)
    .component('z-site-section', ZSiteSection)
    .use(router)

router.isReady().then(() => {
    app.mount('#app')
})