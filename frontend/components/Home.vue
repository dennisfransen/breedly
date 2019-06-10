<template>
    <div class="home">
    
        <v-layout row wrap class="header-content">
            <v-flex xs12 class="text-xs-center" mt-5>
                <span class="display-1 text-uppercase font-weight-medium white--text">Welcome to</span>
                <span class="display-1 text-uppercase font-weight-thin green--text">Breed<span class="display-1 font-weight-medium white--text">ly</span></span>
            </v-flex>
            <v-flex xs12 sm6 offset-sm3 mt-3>
                <blockquote class="blockquote text-xs-center">
                    Our website is a revolutionary new dating platform specifically designed for animals,<br> 
                    where pet owners can find fluffy, prickly and cheerful partners with the help of our matematching search.
                </blockquote>
            </v-flex>
            <v-flex xs12 sm6 offset-sm3 class="text-xs-center" mt-5>
                <v-btn class="header-btn px-5 py-2" color="white" outline large to="/search">GET STARTED</v-btn>
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
        height: 100%;
        width: 100%;
        /* position: fixed; */
    }

    .header-content {
        padding: 15em 0;
        background-color: rgba(0, 0, 0, .3);
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    h1, blockquote {
        color: white;
    }

    .header-btn {
        border-radius: .2em;
    }
</style>
