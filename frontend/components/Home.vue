<template>
    <div class="home">
        <v-btn fab small>Home</v-btn>
        <p><router-link to="/about">About</router-link></p>
        <v-icon large color="green darken-2">business</v-icon>
    </div>
</template>

<script>
export default {
    name: 'home',
    data() {
        return {
            msg: 'Welcome to home page!'
        }
    }
}
</script>
