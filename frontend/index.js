import Vue from 'vue'
import Vuetify from 'vuetify'
import Router from 'vue-router'
import App from './components/App.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Register from './components/Register.vue'
import Search from './components/Search.vue'
import Login from './components/Login.vue'
import Contact from './components/Contact.vue'
// import '@mdi/font/css/materialdesignicons.css'
// import 'vuetify/dist/vuetify.min.css'
// import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.use(Router)
Vue.use(Vuetify, {
    iconfont: 'mdi',
    theme: {
        primary: '#3f51b5',
        secondary: '#b0bec5',
        accent: '#8c9eff',
        error: '#b71c1c'
      }
  })

const router = new Router({
    routes: [
        { path: '/', name: 'home', component: Home },
        { path: '/about', name: 'about', component: About },
        { path: '/register', name: 'register', component: Register },
        { path: '/search', name: 'search', component: Search },
        { path: '/login', name: 'login', component: Login },
        { path: '/contact', name: 'contact', component: Contact }
    ]
})

new Vue({
    el: '#app',
    render: h => h(App),
    router
})
