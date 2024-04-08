import {createApp} from 'vue'
import App from './App.vue'
import '../lib/index.css'
import {SemanticPrime} from "../lib/main";


const app = createApp(App);
app.use(SemanticPrime);

app.mount('#app')
