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
        name: 'App',
        components: {
            Navbar,
            AppFooter
        },
        data() {
            return {
                //
            }
        }
    }
</script>
