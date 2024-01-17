import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import ElContainer from './components/container';
import ELHeader from './components/container';

// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
createApp(App).use(ElContainer).use(ELHeader).mount('#app');
