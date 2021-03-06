import Vue from 'vue'
import Vuex from 'vuex'

import Stocks from '@/store/modules/stocks';
import Portfolio from '@/store/modules/portfolio';

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		Stocks,
		Portfolio
	}
	// state: {
	// 	saldo: 10000,
	// 	stocks: [
	// 		{
	// 			name: "apple",
	// 			value: 300,
	// 		},
	// 		{
	// 			name: "facebook",
	// 			value: 180,
	// 		},
	// 		{
	// 			name: "twitter",
	// 			value: 120,
	// 		},
	// 		{
	// 			name: "google",
	// 			value: 230,
	// 		},
	// 	],
	// 	portfolio: [
	// 		{
	// 			name: "apple",
	// 			value: 300,
	// 			qnt: 10,
	// 		},
	// 		{
	// 			name: "facebook",
	// 			value: 180,
	// 			qnt: 20,
	// 		},
	// 		{
	// 			name: "twitter",
	// 			value: 120,
	// 			qnt: 30,
	// 		},
	// 		{
	// 			name: "google",
	// 			value: 230,
	// 			qnt: 40,
	// 		},
	// 	],
	// },
	// mutations: {
	// },
	// actions: {
	// },
})
