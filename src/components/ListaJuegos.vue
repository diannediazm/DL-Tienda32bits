<template>
    <div class="container mt-5">
    <h1>Lista de juegos</h1>
    <h4>Filtra por código</h4>
    <input type="text" v-model="filtroCodigo">
    <div v-if="filtroJuego.length > 0">
      <div v-for="(producto, clave) in filtroJuego" :key="clave" class="alert alert-danger mt-2" role="alert">
        <div v-text="producto.nombre"></div> 
      </div>
    </div>
    <h4>Cantidad de juegos totales</h4>
    <div>Juegos registrados: {{totalJuegos}}</div>
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
    name: 'ListaJuegos',
    data() {
      return {
        filtroCodigo: '',
      }
    },
    computed: {
    datosJuegos() {
      return this.$store.getters.enviandoJuegos;
    },
    filtroJuego(){
      return this.$store.getters.filtroJuego(this.filtroCodigo);
    },
    totalJuegos(){
      return this.$store.getters.totalJuegos;
    }
  },
}
</script>

<style>
 h4 {
    margin-top: 10px;
  }
  h1 {
    text-align: center;
  }    
</style>