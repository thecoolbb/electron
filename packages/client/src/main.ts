import { createApp } from 'vue'

// const App = require('./App.vue').default;
import App from './App.vue'

import Helloword from './components/HelloWorld.vue';

export { Helloword };

createApp(App).mount('#app');
