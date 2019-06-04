<template>
    <div class="about">
    
        <v-container grid-list-md>
            <v-layout row wrap>
                <v-flex v-for="prop in aboutProps" :key="prop.text" xs12 lg4>
                    <v-card height="40em" class="pt-5">
                        <v-img :src="prop.img" contain max-height="100"></v-img>
                        <v-card-title class="mt-4 display-2 justify-center text-uppercase"> {{ prop.text }}</v-card-title>
                        <v-card-text class="pa-3">{{ prop.msg }}</v-card-text>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    
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
                        msg: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus rem qui, sapiente autem asperiores labore praesentium ipsam non facilis porro suscipit eveniet libero illum iste cumque laudantium placeat vero unde.'
                    },
                    {
                        text: "Mission",
                        img: "./assets/rocket-icon.png",
                        msg: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus rem qui, sapiente autem asperiores labore praesentium ipsam non facilis porro suscipit eveniet libero illum iste cumque laudantium placeat vero unde.'
                    },
                    {
                        text: "Values",
                        img: "./assets/check-icon.png",
                        msg: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus rem qui, sapiente autem asperiores labore praesentium ipsam non facilis porro suscipit eveniet libero illum iste cumque laudantium placeat vero unde.'
                    },
                ],
            }
        }
    }
</script>
