<template>
    <v-app>
        <Navbar />
        <v-content>
            <router-view />
        </v-content>
    </v-app>
</template>

<script>
    import Navbar from './Navbar.vue'
    
    export default {
        name: 'App',
        components: {
            Navbar
        },
        data() {
            return {
                //
            }
        }
    }
</script>
