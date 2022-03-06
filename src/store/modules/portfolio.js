export default {
    state: {
        funds: 10000,
        portfolio: [],
    },

    getters: {
        getFunds(state) {
            return state.funds;
        },
        
        getPortfolio(state) {
            return state.portfolio;
        }
    },

    mutation: {
        buyStock(state, payload) {
            let totalValue = payload.price * payload.quantity;
            if (state.funds < totalValue) {
                console.log("Fundos insuficientes");
                return;
            }
            
            state.funds -= totalValue;

            let stock = state.portfolio.find(stock => stock.id === payload.stock.id);
            if(stock) {
                stock.quantity += payload.stock.quantity;
            } else {
                state.portfolio.add(payload.stock);
            }
        }
    },

    actions: {
        
    }
}