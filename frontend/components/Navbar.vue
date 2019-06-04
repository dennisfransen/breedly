<template>
  <nav>
    <v-toolbar app>
  
      <router-link class="mr-3 underline" to="/">
        <v-toolbar-title class="text-uppercase display-1 grey--text">
          <span class="font-weight-bold">Breedly</span>
        </v-toolbar-title>
      </router-link>
  
      <router-link class="mr-3" v-for="link in links" :key="link.name" :to="link.path">
        <v-toolbar-title class="grey--text">
          <v-btn flat class="font-weight-light navItem">{{link.name}}</v-btn>
        </v-toolbar-title>
      </router-link>
  
      <v-spacer></v-spacer>
  
      <v-btn flat @click="login = !login">Login</v-btn>
  
  
      <!-- <v-flex xs12 md4 lg2>
          <v-expansion-panel>
          <v-expansion-panel-content>
            <template v-slot:header>
              <div>Login</div>
</template>
          <v-card>
            <v-card-text>
              <input placeholder="email">
              <input placeholder="password">
            </v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
      </v-flex> -->
      
     
  <!-- <v-expansion-panel>
    <v-expansion-panel-content v-for="link in links" :key="link">
<template v-slot:header>
  <div>
    Item</div>
</template>
      <v-card>
        <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
      </v-card>
    </v-expansion-panel-content>
  </v-expansion-panel> -->

    </v-toolbar>
    <v-layout row wrap right class="marginLogin">
      <v-card v-if="login">
        <v-card-title>
          <input type="text" placeholder="Email">
          <input type="text" placeholder="Password">
        </v-card-title>
        <v-card-actions>
          <v-btn>Login</v-btn>
        </v-card-actions>
      </v-card>
    </v-layout>
    

  </nav>
</template>

<script>
  export default {
    data() {
      return {
        links: [{
            path: '/about',
            name: 'About us'
          },
          {
            path: '/info',
            name: 'How does Breedly work?'
          },
          {
            path: '/contact',
            name: 'Contact us'
          },
        ],
        login: false
      }
    }
  }
</script>

<style>
  a {
    text-decoration: none;
    text-transform: uppercase;
  }
  
  a:hover,
  a:focus {
    color: #eee;
  }
  
  .underline {
    text-decoration: underline;
  }
  
  .marginLogin {
    margin-top: 100px;
  }
</style>
