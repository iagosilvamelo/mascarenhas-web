<template>
    <footer id="sticky-footer" class="py-4 text-grey-700">
	    <div class="container text-center">
	      	<small>
	      		Todos os direitos reservados &copy; 
	      		<a href="www.addviser.com.br" target="_blank" class="text-bold">
	      			A<span>DD</span>VISER
	      		</a>
	      	</small>
	    </div>
  	</footer>
</template>

<script>
    export default {}
</script>

<style scoped>
	#sticky-footer {
	  flex-shrink: none;
	}

	#sticky-footer a {
		color: #004E78;
		font-weight: bold;
		text-decoration: none;
		transition: all 0.5s;
	}

	#sticky-footer a span {
		color: #A51E2A;
	}

	#sticky-footer a:hover {
		color: #A51E2A;
	}
</style>
