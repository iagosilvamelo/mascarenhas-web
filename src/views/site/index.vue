<template>
    <section>
    	<navbar />

        <div class="site-content">
    	   <transition mode="out-in" name="leftIn">
                <router-view></router-view>
            </transition>
        </div>
        
        <foot />
    </section>
</template>

<script>
	import navbar from '@/components/site/navbar.vue'
	import foot   from '@/components/site/footer.vue'

    export default { components: { navbar, foot } };
</script>

<style scoped>
.site-content {
    margin-top: 80px;
}
</style>