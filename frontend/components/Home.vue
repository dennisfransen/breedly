<template>
    <div class="home">
    
        <v-layout row wrap>
            <v-flex xs12 class="text-xs-center" mt-5>
                <h1>Welcome to BREEDLY</h1>
            </v-flex>
            <v-flex xs12 sm6 offset-sm3 mt-3>
                <blockquote class="blockquote text-xs-center">
                    Our website is a revolutionary new dating platform specifically designed for animals,<br> 
                    where pet owners can find fluffy, prickly and cheerful partners with the help of our matematching search.
                </blockquote>
            </v-flex>
            <v-flex xs12 sm6 offset-sm3 class="text-xs-center" mt-5>
                <v-btn big color="primary" to="/search">GET STARTED</v-btn>
            </v-flex>
        </v-layout>
    
    </div>
</template>

<script>
    export default {
        name: 'home',
        data() {
            return {}
        }
    }
</script>

<style scoped>
    .home {
        background-image: url('../assets/Dog_Background.jpg');
        background-size: cover;
        height: 53em;
    }
</style>
