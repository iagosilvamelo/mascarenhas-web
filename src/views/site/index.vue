<template>
    <section>
    	<navbar />

    	<transition mode="out-in" name="leftIn">
            <router-view></router-view>
        </transition>
        
    </section>
</template>

<script>
	import navbar from '@/components/site/navbar.vue'
	import foot   from '@/components/site/footer.vue'

    export default {
    	components: { navbar, foot },
    };
</script>

<style scoped>
</style>