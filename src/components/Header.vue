<template>
    <v-app-bar app>
        <v-toolbar-title class="headline text-uppercase mr-4">
            <span>Stock</span>
            <span class="font-weight-light">Trader</span>
        </v-toolbar-title>
        <v-toolbar-items>
            <v-btn text to="/">Inicio</v-btn>
            <v-btn text to="/portifolio">Portifolio</v-btn>
            <v-btn text to="/stocks">Ações</v-btn>
        </v-toolbar-items>

        <v-spacer></v-spacer>

        <v-toolbar-items>
            <v-btn text>Finalizar Dia</v-btn>
            
            <v-menu bottom offset-y>
                <template v-slot:activator="{attrs, on}">
                    <v-btn text v-bind="attrs" v-on="on">Salvar & Carregar</v-btn>
                </template>
                <v-list>
                    <v-list-item>
                        <v-list-item-title>Salvar Dados</v-list-item-title>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-title>Carregar Dados</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-toolbar-items>
    </v-app-bar>
</template>

<script>
  export default {
    data: () => ({
      items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
      ],
      offset: true,
    }),
  }
</script>

<style>

</style>