<template>
	<div id="content-wrapper" class="d-flex flex-column">
        <div id="content">

            <topMenu />

            <div class="container-fluid">
                <transition mode="out-in" name="leftIn">
                    <router-view></router-view>
                </transition>
            </div>

        </div>
        
        <logout />
    </div>
</template>

<script>
    import topMenu from "@/components/application/template/top-menu.vue"
    import logout  from "@/components/application/modal/logout.vue"
    export default { components: { topMenu, logout } }
</script>

<style scoped>
</style>
