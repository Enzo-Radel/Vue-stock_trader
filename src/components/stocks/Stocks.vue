<template>
    <v-row>
        <stock v-for="(stock, index) in stocks" :key="index" :name="stock.name" :value="stock.value"/>
    </v-row>
</template>

<script>
import Stock from './Stock.vue'

export default {
    components: {
        "stock": Stock,
    },

    data() {
        return {
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
            ]
        }
    }
}
</script>

<style>

</style>