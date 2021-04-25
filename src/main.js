import { createApp } from 'vue'
import App from './App.vue'
import installElementPlus from './plugins/element'
import router from './router'
import './styles/index.scss'
// import './icons/index' // icon

const app = createApp(App).use(router)
installElementPlus(app)
app.mount('#app')