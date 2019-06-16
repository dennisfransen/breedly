<template>
    <v-app>
        <Navbar />
        <v-content>
            <router-view />
        </v-content>
        <app-footer />
    </v-app>
</template>

<script>
    import Navbar from './Navbar.vue'
    import AppFooter from './Footer.vue'
    
    export default {
        created() {
            this.isUserLoggedIn()
        },
        name: 'App',
        components: {
            Navbar,
            AppFooter
        },
        data() {
            return {
                //
            }
        },
        methods: {
            isUserLoggedIn(){
                fetch('/api/getCookies/')
                .then(response => {
                    return response.text()
                }).then(result =>{
                    console.log('who is loggeed in? ', result);
                    
                    this.$store.commit('WhosLoggedIn', result)
                    
                })
            }
        }
    }
</script>
