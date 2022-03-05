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
        buyStock() {
            console.log('entrou na mutation buyStock');
        }
    },

    actions: {
        
    }
}