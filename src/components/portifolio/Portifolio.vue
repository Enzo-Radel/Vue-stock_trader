<template>
    <v-row>
        <stock v-for="(stock, index) in $store.getters.getPortfolio" :key="index" :stock="stock"/>
    </v-row>
</template>

<script>
import Stock from './Stock.vue'

export default {
    components: {
        "stock": Stock,
    },
}
</script>

<style>

</style>