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
    </div>
</template>

<script>
    import topMenu   from "@/components/application/template/top-menu.vue"
    export default { components: { topMenu } }
</script>

<style scoped>
</style>
