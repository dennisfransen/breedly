<template>
    <div class="profile">
        <v-container class="justify-center">
            <v-layout row wrap>
                <v-flex xs12 sm6 offset-sm3 >

                
                    <v-card
                    class="text-xs-center" 
                    dark
                    color="rgba(0, 0, 0, 0.2"
                    style='font-size: 1.2em'
                    >
                        <v-card-text >
                            
                            <v-list-item-title > Email: <v-list-item-subtitle> {{ userProfile.email }} </v-list-item-subtitle> </v-list-item-title>
                            <br>
                            <v-list-item-title> Full name: <v-list-item-subtitle> {{ userProfile.fullName }} </v-list-item-subtitle> </v-list-item-title>
                            <br>
                            <v-list-item-title> Phone number: <v-list-item-subtitle> {{ userProfile.phoneNumber }} </v-list-item-subtitle> </v-list-item-title>
                            <br>
                            <v-list-item-title> County: <v-list-item-subtitle> {{ userProfile.county }} </v-list-item-subtitle> </v-list-item-title>
                            <br>
                        </v-card-text>
                        <v-card-text >
                            <v-card color="rgba(0, 0, 0, 0.2" v-for="info in numbersPetArray" :key="info.userProfile">
                                <v-list-item-title > Pet type: <v-list-item-subtitle> {{ userProfilePets.petType }} </v-list-item-subtitle> </v-list-item-title>
                                <br>
                                <v-list-item-title> Pet name: <v-list-item-subtitle> {{ userProfilePets.petName }} </v-list-item-subtitle> </v-list-item-title>
                                <br>
                                <v-list-item-title> Pet age: <v-list-item-subtitle> {{ userProfilePets.petAge }} </v-list-item-subtitle> </v-list-item-title>
                                <br>
                                <v-list-item-title> Pet description: <v-list-item-subtitle> {{ userProfilePets.petDescription }} </v-list-item-subtitle> </v-list-item-title>
                                <br>
                                <!-- <v-checkbox v-model="checkbox" :lable="dawar"> </v-checkbox> -->

                            </v-card>
                            <v-card>
                                <v-btn >ADD PET</v-btn>
                            </v-card>
                        </v-card-text>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>


<script>
export default {
    name: 'profile',
    data() {
        return {
            userProfile: {
                email: "",
                fullName: "",
                phoneNumber: "",
                county: ""
            },
            userProfilePets: [{
                petType: "",
                petName: "",
                petAge: "",
                petDescription: "",
                petPedigree: "",
                petSex: ""
            }],

            numbersPetArray: []

            
        }
    },
    methods: {
        addPet(){
            
        }

    }
}
</script>

<style scoped>
  .profile {
    background-image: url('../assets/dog-autumn.jpg');
    background-size: cover;
    height: 100%;
    width: 100%;
    align-items: top;
  }
</style>
