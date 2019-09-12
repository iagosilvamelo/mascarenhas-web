<template>
	<div>
		<div class="container-fluid tab-pane active">
			<ul class="nav nav-tabs" role="tablist" style="margin-bottom: 5px;">
		        <li class="nav-item">
		        	<router-link :to="{name: 'dsbGraficos'}" class="nav-link" data-toggle="tab">Gráficos</router-link>
		        </li>
		        <li class="nav-item">
		        	<router-link :to="{name: 'dsbRamais'}" class="nav-link" data-toggle="tab">Ramais</router-link>
		        </li>
		    </ul>

		    <div class="row">
		        <div class="col-12">
		            <div class="tab-content">
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
	export default {
		props: ["unidade"],

		beforeRouteUpdate(to, from, next) {
			next();
		}
	};
</script>

<style>
	
</style>