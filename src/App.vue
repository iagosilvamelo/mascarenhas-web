<template>
	<transition mode="out-in" name="fadeIn">
    	<application />
    </transition>
</template>

<script>
    import application from "./views/application.vue";
    export default { components: { application } };
</script>

<style>
	.fadeIn-enter, .fadeIn-leave-to {
        transform: translate3d(-40px, 0, 0);
        opacity: 0
    }
    .fadeIn-enter-active, .fadeIn-leave-active {
        transition: all 0.3s;
    }
</style>
