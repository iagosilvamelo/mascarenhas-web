<template>
    <div id="app">
        <div id="wrapper">
            <leftMenu/>

            <div id="content-wrapper" class="d-flex flex-column">
                <div id="content">
                    <topMenu/>
                    <div class="container-fluid">
                        <transition mode="out-in" name="leftIn">
                            <router-view></router-view>
                        </transition>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    //
    //  Import Components
    //
    import leftMenu  from "./components/template/left-menu.vue";
    import topMenu   from "./components/template/top-menu.vue";

    export default {
        components: {
            leftMenu, topMenu
        },
    };
</script>

<style>
    @import './assets/css/liga.css';

    .leftIn-enter, .leftIn-leave-to {
        transform: translate3d(-40px, 0, 0);
        opacity: 0
    }
    .leftIn-enter-active, .leftIn-leave-active {
        transition: all 0.3s;
    }
</style>
