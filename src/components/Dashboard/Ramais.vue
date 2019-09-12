<template>
	<div>
		<h1 class="h6 mb-0 text-gray-800">Ramais de {{unidade}}</h1>
	</div>
</template>

<script>
	export default {
		props: ["unidade"],

		beforeRouteUpdate(to, from, next) {
			next();
		}
	};
</script>

<style>
	
</style>