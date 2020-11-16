<template>
  <div class="container mt-5">
    <h1>Lista de juegos</h1>
    <table class="table mt-4">
      <thead>
        <tr>
          <th>Código</th>
          <th>Nombre</th>
          <th>Stock</th>
          <th>Precio</th>
          <th>Color</th>
          <th>Destacado</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in datosJuegos" :key="index" :style="{backgroundColor: item.color}">
          <td>{{item.codigo}}</td>
          <td>{{item.nombre}}</td>
          <td>{{item.stock}}</td>
          <td>{{item.precio}}</td>
          <td>{{item.color}}</td>
          <td>{{item.destacado}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Busqueda',
  computed: {
    datosJuegos() {
      return this.$store.getters.enviandoJuegos;
    }
  }
}
</script>

<style>
  
</style>
