<template>
    <v-row>
        <stock v-for="(stock, index) in $store.state.portfolio" :key="index" :name="stock.name" :value="stock.value" :qnt="stock.qnt"/>
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