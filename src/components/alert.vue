<template>
    <div class="alert" id="app-alert" :class="type" role="alert" style="display:none;" >{{ mensagem }}</div>
</template>

<script>
    export default {
    	name: "alert",
    	props: [ 'type', 'mensagem' ]
    }
</script>

<style scoped>
</style>
