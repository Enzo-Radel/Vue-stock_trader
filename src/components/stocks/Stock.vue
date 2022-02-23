<template>
	<v-col sm="12" md="6" lg="4">
		<v-card>
		<v-toolbar color="green darken-3" dark>
			<v-toolbar-title>
				<strong>{{name | firstToUpper}} <small>(Preço: {{value | valueInReal}})</small></strong>
			</v-toolbar-title>
		</v-toolbar>
			<v-card-text>
				<v-text-field type="number" label="Quantidade">
					<template v-slot:append-outer>
						<v-btn small>Comprar</v-btn>
					</template>
				</v-text-field>
			</v-card-text>

		</v-card>
	</v-col>

</template>

<script>
	export default {
		props: {
			name: String,
			value: Number,
		},
	}
</script>

<style>

</style>