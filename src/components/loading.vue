<template>
    <div class="loading-balls">
    	<span></span>
    	<span></span>
    	<span></span>
    	<span></span>
    </div>
</template>

<script>
    export default {
    	name: "Loading"
    }
</script>

<style scoped>
	.loading-balls span {
		display: inline-block;
		width: 10px;
		height: 10px;
		border-radius: 10px;
		background: #0E8F84;
		margin: 4px;
		animation: dots 0.6s cubic-bezier(0.6, 0.1, 1, 0.4) infinite alternate;
	}

	.loading-balls span:nth-child(1) {
		animation-delay: 0.1s;
	}

	.loading-balls span:nth-child(2) {
		animation-delay: 0.2s;
	}

	.loading-balls span:nth-child(3) {
		animation-delay: 0.3s;
	}

	.loading-balls span:nth-child(4) {
		animation-delay: 0.4s;
	}

	@keyframes dots {
		from {
			transform: translate3d(0, 0, 0);
		}

		to {
			transform: translate3d(0, 30px, 0);
		}
	}
</style>
