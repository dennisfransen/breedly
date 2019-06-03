 <template>
  <nav>
    <v-toolbar app>
      <router-link to="/">
        <v-toolbar-title class="text-uppercase grey--text">
          <span class="font-weight-light">Breedly</span>
        </v-toolbar-title>
      </router-link>

      <v-spacer></v-spacer>
  
      <v-btn class="uppercase black--text" route to="/signin">
        <span>Logga in</span>
      </v-btn>
    </v-toolbar>
  </nav>
</template>

<script>
  export default {
    data() {
      return {

      };
    }
  };
</script>