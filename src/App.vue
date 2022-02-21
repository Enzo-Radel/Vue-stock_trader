<template>
    <div>
        <cabecalho/>
        <v-main>
            <v-container>
                <router-view></router-view>
            </v-container>
        </v-main>
    </div>
</template>

<script>
import Header from './components/Header'

export default {
  name: 'App',
  components: {"cabecalho": Header}
};
</script>
