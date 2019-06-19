<template>
    <div class="profile">
        <v-container class="justify-center">
            <v-layout row wrap>
                <v-flex xs12 sm6 offset-sm3 >

                    <!-- user info -->
                    <v-card v-if="!addingPet" class="text-xs-center" dark color="rgba(0, 0, 0, 0.2" style='font-size: 1.2em' >

                        <v-card-text >
                            
<<<<<<< HEAD
                            <v-list-tile-title > EMAIL: <v-list-tile-subtitle> {{ userProfile.email }} </v-list-tile-subtitle> </v-list-tile-title>
                            <br>
                            <v-list-tile-title> FULL NAME: <v-list-tile-subtitle> {{ userProfile.fullName }} </v-list-tile-subtitle> </v-list-tile-title>
                            <br>
                            <v-list-tile-title> PHONE NUMBER: <v-list-tile-subtitle> {{ userProfile.phoneNumber }} </v-list-tile-subtitle> </v-list-tile-title>
                            <br>
                            <v-list-tile-title> COUNTY: <v-list-tile-subtitle> {{ userProfile.county }} </v-list-tile-subtitle> </v-list-tile-title>
=======
                            <v-list-tile-title > EMAIL: {{ userProfile.email }} </v-list-tile-title>
                            <br>
                            <v-list-tile-title> FULL NAME: {{ userProfile.fullName }} </v-list-tile-title>
                            <br>
                            <v-list-tile-title> PHONE NUMBER: {{ userProfile.phoneNumber }} </v-list-tile-title>
                            <br>
                            <v-list-tile-title> COUNTY: {{ userProfile.county }} </v-list-tile-title>
>>>>>>> 24a51212cc177ea05df45bfb21b0640c0aba5f5f
                            <br>
                            <!-- <v-btn v-if="!addingPet" dark outline @click="addPet()" >ADD PET <v-icon color="green" right="" >add_circle_outline</v-icon></v-btn> -->

                        </v-card-text>
                    </v-card>

                    <!-- add new pet -->
                    <v-card class="text-xs-center" dark color="rgba(0, 0, 0, 0.2" style='font-size: 1.2em'>
<<<<<<< HEAD
                            
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
                                <v-list-tile-title> Pet type: <v-list-tile-subtitle> {{ userProfilePets[0].type }} </v-list-tile-subtitle> </v-list-tile-title>
                                <br>
                                <v-list-tile-title> Pet name: <v-list-tile-subtitle> {{ userProfilePets[0].petName }} </v-list-tile-subtitle> </v-list-tile-title>
                                <br>
                                <v-list-tile-title> Pet age: <v-list-tile-subtitle> {{ userProfilePets[0].petAge }} </v-list-tile-subtitle> </v-list-tile-title>
                                <br>
                                <v-list-tile-title> Pet description: <v-list-tile-subtitle> {{ userProfilePets[0].petDescription }} </v-list-tile-subtitle> </v-list-tile-title>
=======
                    
                            <v-card dark color="rgba(0, 0, 0, 0.1)" >
                                <v-list-tile-title> Pet type: {{ userProfilePets.petType }} </v-list-tile-title>
                                <br>
                                <v-list-tile-title> Pet name: {{ userProfilePets.petName }} </v-list-tile-title>
                                <br>
                                <v-list-tile-title> Pet age: {{ userProfilePets.petAge }} </v-list-tile-title>
                                <br>
                                <v-list-tile-title> Pet description: {{ userProfilePets.petDescription }} </v-list-tile-title>
>>>>>>> 24a51212cc177ea05df45bfb21b0640c0aba5f5f
                            </v-card>
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
            userProfilePets: {
                petType: "",
                petName: "",
                petAge: "",
                petDescription: "",
                petPedigree: "",
                petSex: ""
            },
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

                        this.userProfilePets.petType = result[key].type
                        this.userProfilePets.petName = result[key].name
                        this.userProfilePets.petAge = result[key].age
                        this.userProfilePets.petDescription = result[key].description
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

