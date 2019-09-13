<template>
	<transition mode="out-in" name="leftIn">
    	<application />
    </transition>
</template>

<script>
    import application from "./views/application.vue";
    export default { components: { application } };
</script>

<style>
	.leftIn-enter, .leftIn-leave-to {
        transform: translate3d(-40px, 0, 0);
        opacity: 0
    }
    .leftIn-enter-active, .leftIn-leave-active {
        transition: all 0.3s;
    }
</style>
