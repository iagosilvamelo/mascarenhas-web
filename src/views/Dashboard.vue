<template>
	<div>
		<div class="d-sm-flex align-items-center justify-content-between mb-4">
	        <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>

	        <div id="stop-msg" class="col-auto hidden">
	            <small class="vermelho">A atualização automatica do Dashboard foi temporariamente desabilitada.</small>
	            <button class="btn btn-success btn-sm" id="start-reload">Ativar</button>
	        </div>

	        <div class="col-md-2">
	            <input type="date" id="setDate" class="form-control form-control-sm">
	        </div>
	    </div>

	    <ul class="nav nav-tabs" role="tablist" style="margin-bottom: 5px;">
	        <li class="nav-item">
	        	<router-link :to="{name: 'dsbUnidade', params: {unidade: 'Curitiba'} }" class="nav-link" data-toggle="tab">Curitiba</router-link>
	        </li>
	        <li class="nav-item">
	        	<router-link :to="{name: 'dsbUnidade', params: {unidade: 'Cascavel'} }" class="nav-link" data-toggle="tab">Cascavel</router-link>
	        </li>
	    </ul>

	    <div class="row">
	        <div class="col-12">
	            <div class="tab-content">
	            	<transition mode="out-in" name="leftIn">
						<router-view :key="unidade"></router-view>
					</transition>
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