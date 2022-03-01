import Vue from 'vue'

Vue.filter('firstToUpper', function(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
})

Vue.filter('valueInReal', function(value) {
    return value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
})