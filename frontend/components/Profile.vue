<template>
    <div id="profile">
    
        <v-container grid-list-md>
            <v-layout row wrap>
    
                <v-flex xs12 lg3>
                    <v-card>
                        <v-img src="../assets/check-icon.png" height="12em"></v-img>
                    </v-card>
                </v-flex>
    
                <v-flex xs12 lg9>
                    <v-card>
                        <v-card-title>Name: {{ user.name }}</v-card-title>
                        <v-card-title>Email: {{ user.email }}</v-card-title>
                        <v-card-title>Location: {{ user.location }}</v-card-title>
                    </v-card>
                </v-flex>
    
            </v-layout>
        </v-container>
    
    </div>
</template>

<script>
    export default {
        name: 'profile',
        created() {
            this.fetchUserFromDatabse()
        },
    
        data() {
            return {
                user: {
                    name: 'Name Lastname',
                    email: 'example@email.com',
                    location: 'Location'
                }
            }
        },
    
        methods: {
    
            fetchUserFromDatabse() {
    
                fetch("/api/userCredentials")
                    .then(response => response.json())
                    .then(result => {
                        this.user.name = result.name
                    })
    
            }
    
        }
    }
</script>
