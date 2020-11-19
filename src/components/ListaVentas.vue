<template>
    <div class="container">
        <h1>Venta de juegos</h1>
        <h4>Cantidad de juegos en stock: {{stockJuegos}}</h4>
        <table class="table mt-5 text-center">
            <thead>
                <tr>
                    <th>Código</th>
                    <th>Nombre</th>
                    <th>Stock</th>
                    <th>Precio</th>
                    <th>Vender</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in traerStock" :key="index">
                    <td>{{item.codigo}}</td>
                    <td>{{item.nombre}}</td>
                    <td>{{item.stock}}</td>
                    <td>$ {{item.precio}}</td>
                    <td><button class="btn btn-danger" @click="vender(index)">Vender</button></td>
                </tr>
            </tbody>
            </table>
    </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
    name: 'ListaVentas',
    computed: {
        traerStock(){
            return this.$store.getters.enviandoStock;
        },
        stockJuegos(){
            return this.$store.getters.totalJuegos;
        },
    },
    methods: {
        ...mapActions(['vender'])
        /*vender(index){
            this.$store.dispatch('vender',index);

        }*/
    },
}
</script>

<style>
    h1 {
        margin-top: 20px;
        margin-bottom: 30px;
        text-align: center;
    }
</style>