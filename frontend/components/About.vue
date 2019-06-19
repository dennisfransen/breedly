<template>
    <div class="about" fill-height>
        <v-parallax height="800" src="../assets/dog-wallpaper.jpg" >
    
        <v-container grid-list-md style="fill" class="scroll-y">
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
                        How does it work?
                        </v-card-text>
                        <v-card-text style='font-size: 1.2em'>
                            <ol>
                                <li>1. Create a profile for your pet</li>
                                <li>2. Search for partner</li>
                                <li>3. Let the fucking begin</li>
                            </ol>
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
        created() {
            this.fetchAboutInfo()
        },
        data() {
            return {
                aboutProps: [{
                        text: "Vision",
                        img: "./assets/eye-icon-white.png",
                        msg: null
                    },
                    {
                        text: "Mission",
                        img: "./assets/rocket-icon-white.png",
                        msg: null     
                    },
                    {
                        text: "Values",
                        img: "./assets/check-icon-white.png",
                        msg: null             
                    },
                ],
                
            }
        },
        methods: {
            fetchAboutInfo() {

                fetch('/api/aboutText')
                .then(response => response.json())
                .then(result => {
                    for (const key in result) {
                            
                        this.aboutProps[key].msg = result[key].info
                        
                    }
                })
            }
        }
    }
</script>

<style>
    v-img {
        
    }
</style>

