<template>
    <div id="footer" height: auto>
        <v-card flat tile class="footer-card lighten-1 black--text text-xs-center flex">
            <v-card-text>
                <v-btn v-for="icon in icons" :key="icon" class="mx-3" icon>
                    <v-icon size="24px">{{ icon }}</v-icon>
                    <v-icon>mdi-facebook</v-icon>
                </v-btn>
            </v-card-text>
            <v-card-text>
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
    name: "footer",
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
    }
</style>
