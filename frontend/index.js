import Vue from 'vue'
import Vuetify from 'vuetify'
import Router from 'vue-router'
import App from './components/App.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Register from './components/Register.vue'
// import '@mdi/font/css/materialdesignicons.css'
// import 'vuetify/dist/vuetify.min.css'
// import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.use(Router)
Vue.use(Vuetify, {
    iconfont: 'mdi'
  })

const router = new Router({
    routes: [
        { path: '/', name: 'home', component: Home },
        { path: '/about', name: 'about', component: About },
        { path: '/register', name: 'register', component: Register}
    ]
})

new Vue({
    el: '#app',
    render: h => h(App),
    router
})
