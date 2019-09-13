<template>
	<transition mode="out-in" name="leftIn">
    	<router-view></router-view>
    </transition>
</template>

<script>
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
