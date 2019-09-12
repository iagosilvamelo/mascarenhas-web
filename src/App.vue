<template>
    <div id="app">
        <application v-if="auth == true" />
    </div>
</template>

<script>
    import application from "./components/application.vue";

    export default {
        components: {
            application
        },

        computed: {
            auth() {
                return this.$store.state.auth
            }
        }
    };
</script>

<style>
</style>
