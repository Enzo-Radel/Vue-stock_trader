<template>
	<v-col sm="12" md="6" lg="4">
		<v-card>
		<v-toolbar color="green darken-3" dark>
			<v-toolbar-title>
				<strong>{{stock.name | firstToUpper}} <small>(Preço: {{stock.value | valueInReal}})</small></strong>
			</v-toolbar-title>
		</v-toolbar>
			<v-card-text>
				<v-text-field type="number" label="Quantidade" v-model.number="qntStocks" :rules="rules" required>
					<template v-slot:append-outer>
						<v-btn small @click="buyStock">Comprar</v-btn>
					</template>
				</v-text-field>
			</v-card-text>

		</v-card>
	</v-col>

</template>

<script>
	export default {
		props: {
			stock: Object,
		},

		data() {
			return {
				qntStocks: 1,
				rules: [v => v > 0 && Number.isInteger(v)|| 'Quantidade não permitida'],
			}
		},

		methods: {
			buyStock() {
				
			},
		}
	}
</script>

<style>

</style>