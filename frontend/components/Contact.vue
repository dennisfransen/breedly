<template>
  <!-- <v-layout class ="contactus" row>
    <v-flex xs11 sm6 offset-sm3>
      <v-card>
        <v-toolbar class ="translucentBackground" color="#696969" dark>
          <v-toolbar-title >Contact Us</v-toolbar-title>

          <v-spacer></v-spacer>

        </v-toolbar>

        <v-list two-line>
          <template v-for="(contact, index) in contacts">
            <v-subheader
              v-if="contact.email"
              :key="contact.email"
            >
              {{ contact.email }}
            </v-subheader>

            <v-divider
              v-else-if="contact.divider"
              :key="index"
              :inset="contact.inset"
            ></v-divider>

            <v-list-tile
              v-else
              :key="contact.title"
              avatar
            ><v-list-tile-avatar>
                <img :src="contact.avatar">
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title v-html="contact.email"></v-list-tile-title>
                <v-list-tile-sub-title v-html="contact.phone"></v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>-->


  <div class="login" align-center justify-center fill-height>
    <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <v-card class="mt-5" color="rgba(0, 0, 0, 0.2">
          <v-layout justify-right offset-sm6>
            <v-flex xs6 sm3 text-xs-right offset-sm8>
              <template v-for="(contact, index) in contacts">
                <v-subheader
                  v-if="contact.email"
                  :key="contact.email"
                >{{ contact.email }} - {{contact.number}}</v-subheader>
              </template>
            </v-flex>
          </v-layout>

          <v-layout justify-right offset-sm1>
            <v-flex xs6 sm3 text-xs-right offset-sm1>
              <!-- card for userinput -->
              <v-card class="translucentBackground" flat tile>
                <v-text-field dark v-model="email" label="Email" required></v-text-field>
                <v-textarea
                  dark
                  outline
                  v-model="title"
                  label="Message us"
                  counter
                  maxlength="150"
                  full-width
                  single-line
                ></v-textarea>

                <v-btn dark outline>
                  Send
                  <v-icon color="green" right>mail</v-icon>
                </v-btn>
              </v-card>
              <!-- card for error message when email dosen't exsist -->
              <v-card v-if="notRegistered" flat tile class="translucentBackground">
                <v-divider></v-divider>
                <div class="white--text">We can't find an account with this email!</div>
              </v-card>
              <!-- card for error message when password is wrong -->
              <v-card v-if="wrongPassword" flat tile class="translucentBackground">
                <v-divider></v-divider>
                <div class="white--text">That password ain't right, dog.</div>
              </v-card>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>




<script>
export default {
  data() {
    return {
      contacts: []
    };
  },
  methods: {
    async fetchContacts() {
      this.contacts = await fetch("http://localhost:3000/contacts").then(
        response => response.json()
      );
    }
  },
  created() {
    this.fetchContacts();
  }
};
</script>

<style scoped>
.login {
  background-image: url("../assets/Dog_Background.jpg");
  background-size: cover;
  height: 100%;
  width: 100%;
  align-items: top;
}

.translucentBackground {
  margin-top: 5px;
  background-color: rgba(0, 0, 0, 0);
}
/* .formSettings{
    background-color: gray;
    position: relative;
} */
</style>

