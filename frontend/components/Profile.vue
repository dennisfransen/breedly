<template>
    <div class="profile">
        <v-container class="justify-center">
            <v-layout row wrap>
                <v-flex xs12 sm6 offset-sm3 >

                    <!-- user info -->
                    <v-card v-if="!addingPet" class="text-xs-center" dark color="rgba(0, 0, 0, 0.2" style='font-size: 1.2em' >

                        <v-card-text >
                            
                            <v-list-item-title > EMAIL: <v-list-item-subtitle> {{ userProfile.email }} </v-list-item-subtitle> </v-list-item-title>
                            <br>
                            <v-list-item-title> FULL NAME: <v-list-item-subtitle> {{ userProfile.fullName }} </v-list-item-subtitle> </v-list-item-title>
                            <br>
                            <v-list-item-title> PHONE NUMBER: <v-list-item-subtitle> {{ userProfile.phoneNumber }} </v-list-item-subtitle> </v-list-item-title>
                            <br>
                            <v-list-item-title> COUNTY: <v-list-item-subtitle> {{ userProfile.county }} </v-list-item-subtitle> </v-list-item-title>
                            <br>
                            <!-- <v-btn v-if="!addingPet" dark outline @click="addPet()" >ADD PET <v-icon color="green" right="" >add_circle_outline</v-icon></v-btn> -->

                        </v-card-text>
                    </v-card>

                    <!-- add new pet -->
                    <v-card class="text-xs-center" dark color="rgba(0, 0, 0, 0.2" style='font-size: 1.2em'>
                            
                        <!-- <v-list style="max-height: 550px" class="scroll-y" color="rgba(0, 0, 0, 0.2" ></v-list>
                            <v-card v-if="addingPet" class="text-xs-center" dark color="rgba(0, 0, 0, 0.2" flat tile >
                                <v-text-field dark v-model="petType" label="Pet type" required></v-text-field>
                                <v-text-field dark v-model="petName" label="Pet name" required></v-text-field>
                                <v-text-field dark v-model="petAge" label="Pet age" required></v-text-field>
                                
                                <v-textarea dark v-model="petDescription" label="Describe your pet">Description</v-textarea>

                                <v-switch dark v-model="pedigree" label="Pedigree"></v-switch>
                                
                                <v-btn dark outline @click="cancel()"> Cancel <v-icon color="red" right="" >arrow_back</v-icon></v-btn>
                                <v-btn dark outline @click="register(petType, petName, petAge, petDescription, pedigree)"> Register <v-icon color="green" right="" >check_circle</v-icon></v-btn>
                            </v-card> -->

                        <!-- loop for all pets from user -->
                        <v-card-text v-for="info in numbersPetArray" :key="info.userProfilePets">
                            <v-card v-if="!addingPet" dark color="rgba(0, 0, 0, 0.1" >
                                <v-list-item-title> Pet type: <v-list-item-subtitle> {{ userProfilePets[0].type }} </v-list-item-subtitle> </v-list-item-title>
                                <br>
                                <v-list-item-title> Pet name: <v-list-item-subtitle> {{ userProfilePets[0].petName }} </v-list-item-subtitle> </v-list-item-title>
                                <br>
                                <v-list-item-title> Pet age: <v-list-item-subtitle> {{ userProfilePets[0].petAge }} </v-list-item-subtitle> </v-list-item-title>
                                <br>
                                <v-list-item-title> Pet description: <v-list-item-subtitle> {{ userProfilePets[0].petDescription }} </v-list-item-subtitle> </v-list-item-title>
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
    created(){
        this.getUser()
    },
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
            numbersPetArray: [],
            addingPet : false,
            petName: null,
            petType: null,
            petAge: null,
            petDescription: null,
            pedigree: null,
            gender: null,
            petMale: null,
            petFemale: null,
            petInfo: null
            
        }
    },
    methods: {
        getUser(){

            fetch("/api/userCredentials")
                .then(response => response.json())
                .then(result => {                
                    this.userProfile.fullName = result[0].name
                    this.userProfile.email = result[0].email
                    this.userProfile.phoneNumber = result[0].number
                    this.userProfile.county = result[0].location
            }).then(() => {
                fetch("/api/userPets")
                    .then(response => response.json())
                    .then(result => {  
                    
                    for (const key in result) {
                        this.userProfilePets[key] = result[key]

                        this.userProfilePets[key].petType = result[key].type
                        this.userProfilePets[key].petName = result[key].name
                        this.userProfilePets[key].petAge = result[key].age
                        this.userProfilePets[key].petDescription = result[key].description
                    }

                    this.userProfilePets[0].petType = result[0].type
                    this.numbersPetArray = this.userProfilePets.length
                })
            })
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

