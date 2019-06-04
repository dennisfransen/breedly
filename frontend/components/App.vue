<template>
    <v-app>
        <Navbar />
        <v-content>
            <router-view />
        </v-content>
        <Footer />
    </v-app>
</template>

<script>
    import Navbar from './Navbar.vue'
    import Footer from './Footer.vue'
    
    export default {
        name: 'App',
        components: {
            Navbar,
            Footer
        },
        data() {
            return {
                //
            }
        }
    }
</script>
