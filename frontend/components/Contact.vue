<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-toolbar color="#696969" dark>
          <v-toolbar-title>Contact Us</v-toolbar-title>

          <v-spacer></v-spacer>

          <v-btn icon>
            <v-icon>search</v-icon>
          </v-btn>
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
            >
              <v-list-tile-avatar>
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
  </v-layout>
</template>
<script>
export default {
    data() {
        return {
            contacts: []
        }
    },
    methods: {
        async fetchContacts() {
            this.contacts = await fetch("http://localhost:3000/contacts").then(response => response.json())
        }
    },
    created() {
        this.fetchContacts()
    }
}
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
  background-color: rgba(0, 0, 0, 0.0);
}
</style>

