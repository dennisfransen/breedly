import Vue from 'vue'
import Vuetify from 'vuetify'
import Router from 'vue-router'
import App from './components/App.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Router)
Vue.use(Vuetify)

const router = new Router({
    routes: [
        { path: '/', name: 'home', component: Home },
        { path: '/about', name: 'about', component: About }  
    ]
})

new Vue({
    el: '#app',
    render: h => h(App),
    router
})