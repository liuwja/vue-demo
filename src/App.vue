<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
    import login from './components/login/Login'

    export default {
        name: 'App',
        components: {
            login
        }
    }
</script>

<style>
    #app {
        width: 100%;
        height: 100%;
    }
</style>
