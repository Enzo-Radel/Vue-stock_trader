<template>
    <v-row>
        <stock v-for="(stock, index) in $store.state.stocks" :key="index" :name="stock.name" :value="stock.value"/>
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