<template>
    <v-app>
        <cabecalho/>
        <v-main>
            <v-container fluid style="width: 85%">
                <router-view></router-view>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
import Header from './components/Header'

export default {
  name: 'App',
  components: {"cabecalho": Header},
};
</script>
