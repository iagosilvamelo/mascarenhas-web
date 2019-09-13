<template>
	<div id="wrapper" v-if="auth == true">
        <leftMenu />
        <AppContent />
    </div>

    <login v-else />
</template>

<script>
    import leftMenu   from "@/components/application/template/left-menu.vue";
    import AppContent from "@/components/application/template/content.vue";
    import login      from "./Login.vue";

    export default { 
        components: { leftMenu, AppContent, login },
        computed: { auth() { return this.$store.state.auth } }
    }
</script>

<style scoped>
	@import '../../assets/css/liga.css';
</style>
