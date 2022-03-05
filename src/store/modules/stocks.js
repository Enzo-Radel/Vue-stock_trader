export default {
    state: {
        stocks: [
			{
                id: 1,
				name: "apple",
				value: 300,
			},
			{
                id: 2,
				name: "facebook",
				value: 180,
			},
			{
                id: 3,
				name: "twitter",
				value: 120,
			},
			{
                id: 4,
				name: "google",
				value: 230,
			},
		],
    },

    getters: {
        // getStockById: (state) => (id) => {
        //     return state.stocks.find(stock => stock.id === id)
        // }

        getStocks(state) {
            return state.stocks;
        }
    },

    mutation: {

    },

    actions: {
        // buyStock(context, {id, quantity}) {
        //     stock = context.getters.getStockById(id);
        //     if (stock != null) {
        //         stock.quantity = quantity;
        //         context.commit('buyStock');
        //     }
        // }
    }
}