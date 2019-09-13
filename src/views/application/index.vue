<template>
	<div id="wrapper">
            <leftMenu />

            <div id="content-wrapper" class="d-flex flex-column">
                <div id="content">
                    <topMenu />
                    <div class="container-fluid">
                        <transition mode="out-in" name="leftIn">
                            <router-view></router-view>
                        </transition>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
    import leftMenu  from "@/components/template/left-menu.vue";
    import topMenu   from "@/components/template/top-menu.vue";

    export default {
    	name: "Application",

        components: {
            leftMenu, topMenu
        },
    };
</script>

<style scoped>
	@import '../../assets/css/liga.css';
</style>
