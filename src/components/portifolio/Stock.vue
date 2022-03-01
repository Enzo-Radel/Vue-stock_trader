<template>
	<v-col sm="12" md="6" lg="4">
		<v-card>
		<v-toolbar color="blue darken-3" dark>
			<v-toolbar-title>
				<strong>{{stock.name | firstToUpper}} <small>(Preço: {{stock.value | valueInReal}} | Quantidade: {{stock.qnt}})</small></strong>
			</v-toolbar-title>
		</v-toolbar>
			<v-card-text>
				<v-text-field type="number" label="Quantidade" v-model.number="qntStocks" :rules="rules" required>
					<template v-slot:append-outer>
						<v-btn v-if="qntStocks > 0" small>Vender</v-btn>
						<v-btn v-else small disabled>Indisponível</v-btn>
					</template>
				</v-text-field>
			</v-card-text>

		</v-card>
	</v-col>

</template>

<script>
	// import { validationMixin } from 'vuelidate'
	// import { required, maxLength, email } from 'vuelidate/lib/validators'
	export default {
		props: {
			stock: Object,
		},
		data() {
			return {
				qntStocks: 1,
				rules: [v => v <= this.stock.qnt && v > 0 || 'Quantidade Indisponível'],
			}
		}
	}
</script>

<style>

</style>