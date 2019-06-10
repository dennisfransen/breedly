<template>
    <div id="footer" height:0>
        <v-card height=0 flat tile class="footer-card lighten-1 black--text text-xs-center flex">
            <v-card-text class="iconSettings">
                <v-btn v-for="icon in icons" :key="icon" class="mx-3" icon>
                    <v-icon size="24px">{{ icon }}</v-icon>
                    <v-icon>mdi-facebook</v-icon>
                </v-btn>
            </v-card-text>
            <v-card-text class="textSettings">
                School project - due date 2019-06-21
            </v-card-text>

                    <v-divider></v-divider>

            <v-card-text class="black--text text-center">
                &copy; 2019 - <strong class="text-uppercase">Breedly</strong>
            </v-card-text>
        </v-card>
    </div>
</template>


<script>
export default {
    name: "appFooter",
    data () {
        return {
            icons: [
                'fab fa-facebook',
                'fab fa-twitter',
                'fab fa-google-plus',
                'fab fa-linkedin',
                'fab fa-instagram'
            ]
        }
    }
}
</script>

<style scoped>
    .footer-card {
        background-color: #f5f5f5;
        max-height: 1vh;
        flex-direction: column;
        flex-grow: 1;
        min-height: 100%;
        display: grid;
        grid-template-rows: auto 1fr auto;
        grid-template-columns: 100%;
        padding: 0
    }
     .iconSettings {
        padding: 0
    } 
    .textSettings{
        height: 0,1px;
        padding:0rem;
    }

</style>
