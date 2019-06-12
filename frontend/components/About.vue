<template>
    <div class="about">
        <v-parallax height="800" src="../assets/dog-wallpaper.jpg" >
    
        <v-container grid-list-md>
            <v-layout row wrap>
                <v-flex v-for="prop in aboutProps" :key="prop.text" xs12 lg4>
                    <v-card dark color="rgba(0, 0, 0, 0.4" height="28em" width="26,5em" class="pt-5">
                        <v-img :src="prop.img" contain max-height="100"></v-img>
                        <v-card-title class="mt-4 display-2 justify-center text-uppercase"> {{ prop.text }}</v-card-title>
                        <v-card-text class="pa-3" style='font-size: 1.1em'>{{ prop.msg }}</v-card-text>
                    </v-card>
                </v-flex>
                <v-flex xs12>
                    <v-card class="text-xs-center" dark color="rgba(0, 0, 0, 0.4">
                        <v-icon size="100" color="green" >pets</v-icon>
                        <v-card-text title style='font-size: 2em'>
                        How does it work? kakan was here
                        </v-card-text>
                        <v-card-text style='font-size: 1.2em'>
                        1. Create a profile for your pet
                        </v-card-text>
                        <v-card-text style='font-size: 1.2em'>
                        2. Search for partner
                        </v-card-text>
                        <v-card-text style='font-size: 1.2em'>
                        3. Let the fucking begin
                        </v-card-text>
                    </v-card>
                </v-flex>
                
            </v-layout>
        </v-container>
    </v-parallax>
    </div>
</template>

<script>
    export default {
        name: 'home',
        data() {
            return {
                aboutProps: [{
                        text: "Vision",
                        img: "./assets/eye-icon.png",
                        msg: 'We at Breedly want to see a world where even our pets can find their true love online, and in the process giving us more loveable adorable pets.'
                    },
                    {
                        text: "Mission",
                        img: "./assets/rocket-icon.png",
                        msg: 'Our mission is to supply the means necessary for your pet to be able to breed with a suitable partner.'        
                    },
                    {
                        text: "Values",
                        img: "./assets/check-icon.png",
                        msg: 'Animals First! That is our motto here at Breedly.'                    
                    },
                ],
                
            }
        }
    }
</script>

<style scoped>
    .about {
        /* background-image: url('../assets/Dog_Background.jpg');
        background-size: cover;
        height: 100%;
        width: 100%;
        position: static; */
        
    }
</style>
