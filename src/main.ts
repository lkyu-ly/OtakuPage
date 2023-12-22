import '@/styles/index.scss';
import { createPinia } from 'pinia';
import 'uno.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');
