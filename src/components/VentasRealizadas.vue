<template>
    <div class="container">
        <h1>Listado de ventas registradas</h1>
        {{ventasRegistradas}}
        <h1>Monto total de ventas</h1>
        $ {{totalVentas}}
    </div>
</template>

<script>

import { mapGetters } from 'vuex';
export default {
    name: 'VentasRealizadas',
    computed: {
        ...mapGetters(['ventasRegistradas','totalVentas'])
    }
}
</script>

<style scoped>
    h1 {
        text-align: center;
        margin-top: 30px;
    }
</style>