<template>
    <section>
    	<div class="row d-flex justify-content-center">
			<h1>E.T.E Mal Mascarenhas de Moraes</h1>
		</div>
		
		<div class="row d-flex justify-content-center">
			<img :src="require(`@/assets/logo.png`)" :alt="school">
		</div>

		<div class="container">
			<table class="table">
				<thead align="center">
					<th colspan="4">Cronograma de Rematrícula</th>
				</thead>
				<tbody>
					<tr>
						<td align="center">05/08/2019</td>
						<td align="center">06/08/2019</td>
						<td align="center">07/08/2019</td>
						<td align="center">08/08/2019</td>
					</tr>
					<tr>
						<td align="center"> 19:00 às 20:30 </td>
						<td align="center"> 19:00 às 20:30 </td>
						<td align="center"> 19:00 às 20:30 </td>
						<td align="center"> 19:00 às 20:30 </td>
					</tr>
					<tr>
						<td align="center">Seg</td>
						<td align="center">Ter</td>
						<td align="center">Qua</td>
						<td align="center">Qui</td>
					</tr>
					<tr>
						<td align="center">Secretariado</td>
						<td align="center">Contabilidade</td>
						<td align="center">Logística</td>
						<td align="center">Informática</td>
					</tr>
				</tbody>
			</table>
		</div>
    </section>
</template>

<script>
    export default {
    	data: () => { return { school: "Escola Técnica Estadual Marechal Mascarenhas de Moraes" } }
    };
</script>

<style scoped>
</style>