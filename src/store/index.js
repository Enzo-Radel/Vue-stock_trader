import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		saldo: 10000,
		stocks: [
			{
				name: "apple",
				value: 300,
			},
			{
				name: "facebook",
				value: 180,
			},
			{
				name: "twitter",
				value: 120,
			},
			{
				name: "google",
				value: 230,
			},
		],
		portfolio: [
			{
				name: "apple",
				qntd: 10,
			},
			{
				name: "facebook",
				qntd: 20,
			},
			{
				name: "twitter",
				qntd: 30,
			},
			{
				name: "google",
				qntd: 40,
			},
		],
	},
	mutations: {
	},
	actions: {
	},
	modules: {
	}
})
