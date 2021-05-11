import { createApp} from 'vue'
import App from './App.vue'
import installElementPlus from './plugins/element'
import router from './router'
import './styles/index.scss'
// import './icons/index' // icon
import axios from 'axios'

require('./mock.js')

const app = createApp(App).use(router)
app.config.globalProperties.$axios = axios
installElementPlus(app)
app.mount('#app')