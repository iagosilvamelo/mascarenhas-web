<template>
    <application v-if="auth == true" />
    <login v-else />
</template>

<script>
    import application from "./application/index.vue";
    import login       from "./application/Login.vue";

    export default { 
    	components: { application, login },
    	computed: { auth() { return this.$store.state.auth } }
    };
</script>

<style>
</style>