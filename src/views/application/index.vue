<template>
	<div id="wrapper">
        <leftMenu />
        <AppContent />
    </div>
</template>

<script>
    import leftMenu   from "@/components/application/template/left-menu.vue";
    import AppContent from "@/components/application/template/content.vue";

    export default { components: { leftMenu, AppContent } }
</script>

<style lang="scss">
	@import '../../assets/sass/liga.scss';
</style>
