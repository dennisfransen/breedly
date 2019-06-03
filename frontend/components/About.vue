<template>
    <div class="about">
        <h1>{{ msg }}</h1>
        <p><router-link to="/">Home</router-link></p>
    </div>
</template>

<script>
export default {
    name: 'home',
    data() {
        return {
            msg: 'Welcome to About page!'
        }
    }
}
</script>

