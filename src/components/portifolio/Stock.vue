<template>
	<v-col sm="12" md="6" lg="4">
		<v-card>
		<v-toolbar color="blue darken-3" dark>
			<v-toolbar-title>
				<strong>{{name | firstToUpper}} <small>(Preço: {{value | valueInReal}} | Quantidade: {{qnt}})</small></strong>
			</v-toolbar-title>
		</v-toolbar>
			<v-card-text>
				<v-form v-model="valid" ref="form" lazy-validation>
					<v-text-field type="number" label="Quantidade" v-model="qntSell" :rules="rules" required>
						<template v-slot:append-outer>
							<v-btn v-if="valid" small>Vender</v-btn>
							<v-btn v-else small disabled>Indisponível</v-btn>
						</template>
					</v-text-field>
				</v-form>
			</v-card-text>

		</v-card>
	</v-col>

</template>

<script>
	import { validationMixin } from 'vuelidate'
	import { required, maxLength, email } from 'vuelidate/lib/validators'
	export default {
		props: {
			name: String,
            value: Number,
			qnt: Number,
		},
		data() {
			return {
				valid: true,
				qntSell: 0,
				rules: [v => v <= this.qnt || 'Quantidade Indisponível'],
			}
		}
	}
</script>

<style>

</style>