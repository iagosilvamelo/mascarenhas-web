<template>
	<div>
		<div class="d-sm-flex align-items-center justify-content-between mb-4">
	        <h1 class="h3 mb-0 text-gray-800">Usuários</h1>
	    </div>

		<ul class="nav nav-tabs" role="tablist" style="margin-bottom: 5px;">
	        <li class="nav-item">
	        	<router-link :to="{name: 'getAll', params: {get: 'Todos'} }" class="nav-link" data-toggle="tab">Totos</router-link>
	        </li>

	        <li class="nav-item">
	        	<router-link :to="{name: 'getUsers', params: {get: 'Usuarios'} }" class="nav-link" data-toggle="tab">Usuarios</router-link>
	        </li>

	        <li class="nav-item">
	        	<router-link :to="{name: 'getAdmins', params: {get: 'Administradores'} }" class="nav-link" data-toggle="tab">Administradores</router-link>
	        </li>
	    </ul>

	    <div class="row">
	        <div class="col-12">
	            <div class="tab-content">
	            	<transition mode="out-in" name="leftIn">
						<router-view :key="get"></router-view>
					</transition>
	            </div>
	        </div>
	    </div>
	</div>
</template>

<script>
	export default {
		props: ["get"],

		beforeRouteUpdate(to, from, next) {
			next();
		}
	};
</script>

<style>
</style>