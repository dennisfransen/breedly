<template>
    <div class="home">
        <h1>{{ msg }}</h1>
        <p><router-link to="/about">About</router-link></p>
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
